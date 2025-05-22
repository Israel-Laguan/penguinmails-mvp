"use server";
import { mockEmails } from "../mockEmails";
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

export const getAllMessages = async (
  query: Query = {},
  type: Type = "all",
  pagination: PaginationOptions = {},
  search = "",
) => {
  const { email = [], from = [], campaign = [] } = query;
  const { page = 1, limit = 10 } = pagination;

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
};

export const getUniqueFilters = async () => {
  const [emails, froms, campaigns] = await Promise.all([
    prisma.emailMessage.findMany({
      select: {
        client: {
          select: {
            email: true,
          },
        },
      },
      distinct: ['id'],
    }),

    prisma.emailMessage.findMany({
      select: {
        client: {
          select: {
            email: true,
          },
        },
      },
      distinct: ['id'],
    }),

    prisma.emailMessage.findMany({
      select: {
        campaign: {
          select: {
            name: true,
          },
        },
      },
      where: {
        campaign: {
          isNot: null,
        },
      },
      distinct: ['campaignId'],
    }),
  ]);

  const email = emails.map(e => e.client?.email).filter(Boolean);
  const from = froms.map(f => f.client?.email).filter(Boolean);
  const campaign = campaigns.map(c => c.campaign?.name).filter(Boolean);

  return {
    email,
    from,
    campaign,
  };
};
