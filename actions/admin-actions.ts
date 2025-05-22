"use server";
import { isUserAllowed } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";

interface Query {
  email?: string[];
  from?: string[];
  campaign?: string[];
}

type Type = "all" | "unread" | "starred";

interface PaginationOptions {
  page?: number;
  limit?: number;
}

const adminActions = {
  getAllMessages: async (
    query: Query = {},
    type: Type = "all",
    pagination: PaginationOptions = {},
    search = "",
  ) => {
    const { email = [], from = [], campaign = [] } = query;
    const { page = 1, limit = 10 } = pagination;
  
    const { success, data } = await isUserAllowed(['admin']);

    if (!success) return { error: data }
    console.log("User allowed: ", success, data);
  
    const filters: any = {
      AND: [],
    };
  
    if (email.length > 0) {
      filters.AND.push({
        toUser: {
          email: {
            in: email.map((e) => e.toLowerCase()),
            mode: "insensitive",
          },
        },
      });
    }
  
    if (from.length > 0) {
      filters.AND.push({
        fromUser: {
          email: {
            in: from.map((f) => f.toLowerCase()),
            mode: "insensitive",
          },
        },
      });
    }
  
    if (campaign.length > 0) {
      filters.AND.push({
        campaign: {
          name: {
            in: campaign.map((c) => c.toLowerCase()),
            mode: "insensitive",
          },
        },
      });
    }
  
    if (search.trim()) {
      filters.AND.push({
        OR: [
          { subject: { contains: search, mode: "insensitive" } },
          { body: { contains: search, mode: "insensitive" } },
          { fromUser: { email: { contains: search, mode: "insensitive" } } },
          { toUser: { email: { contains: search, mode: "insensitive" } } },
        ],
      });
    }
  
    if (type === "unread") {
      filters.AND.push({ read: false });
    } else if (type === "starred") {
      filters.AND.push({ starred: true });
    }
  
    const skip = (page - 1) * limit;

    const [emails, total, unread] = await Promise.all([
      prisma.emailMessage.findMany({
        where: filters,
        include: {
          client: true,
          campaign: true,
        },
        skip,
        take: limit,
      }),
      prisma.emailMessage.count({ where: filters }),
      prisma.emailMessage.count({ where: { ...filters, read: false } }),
    ]);
  
    return {
      emails,
      unread,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
  },
}