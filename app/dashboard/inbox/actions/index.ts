"use server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

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

export const getAllMessagesAction = async (
  query: Query = {},
  type: Type = "all",
  pagination: PaginationOptions = {},
  search = "",
) => {
  const { email = [], from = [], campaign = [] } = query;
  const { page = 1, limit = 10 } = pagination;

  const filters: any = {
    AND: [
      { deletedAt: null },
      { hideAt: null },
    ],
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
    const fromConditions = from
      .map(fullName => {
        const [firstName, ...lastNameParts] = fullName.trim().split(" ");
        const lastName = lastNameParts.join(" ");
        if (!firstName || !lastName) return null;
        return {
          AND: [
            { client: { firstName: { equals: firstName, mode: "insensitive" } } },
            { client: { lastName: { equals: lastName, mode: "insensitive" } } },
          ],
        };
      })
      .filter(Boolean);
  
    if (fromConditions.length > 0) {
      filters.AND.push({ OR: fromConditions });
    }
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
        { campaign: { name: { contains: search, mode: "insensitive" } } },
        { client: { firstName: { contains: search, mode: "insensitive" } } },
        { client: { lastName: { contains: search, mode: "insensitive" } } },
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

export const getUniqueFiltersAction = async () => {
  const [emails, froms, campaigns] = await Promise.all([
    prisma.emailMessage.findMany({
      select: {
        client: {
          select: {
            email: true,
          },
        },
      },
      distinct: ['clientId'],
    }),

    prisma.emailMessage.findMany({
      select: {
        client: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      distinct: ['clientId'],
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

  const email = emails
    .map(e => e.client?.email)
    .filter(Boolean);

  const fromSet = new Set(
    froms
      .map(f => {
        const first = f.client?.firstName;
        const last = f.client?.lastName;
        return first && last ? `${first} ${last}` : null;
      })
      .filter(Boolean)
  );

  const from = Array.from(fromSet);

  const campaign = campaigns
    .map(c => c.campaign?.name)
    .filter(Boolean);

  return {
    email,
    from,
    campaign,
  };
};


export async function fetchEmailByIdAction(id: string) {
  const parsedId = parseInt(id as unknown as string, 10);

  const filters: any = {
    AND: [
      { deletedAt: null },
      { hideAt: null },
    ],
  };

    const email = await prisma.emailMessage.findFirst({
      where: {
        id: parsedId,
        ...filters,
      },
      include: {
        campaign: true,
        client: true,
      },
    });
    if (!email) {
      return null;
    }
    return {
      ...email,
      htmlContent: email.body,
    };
};

export async function markEmailAsReadAction(id: number | string | undefined) {
  const parsedId = parseInt(id as unknown as string, 10);

  const email = await prisma.emailMessage.update({
    where: { id: parsedId },
    data: { read: true },
  });

  return email;
}

export async function markEmailAsStarredAction(id: number | string, starred: boolean) {
  const parsedId = parseInt(id as unknown as string, 10);

  const email = await prisma.emailMessage.update({
    where: { id: parsedId },
    data: { starred },
  });

  return email;
}

/**
 * Soft delete an email message.
 * @param emailId - ID of the email to delete.
 * @param userId - ID of the user performing the deletion.
 */
export async function softDeleteEmailAction(emailId: number | string | undefined) {
  try {
    const parsedEmailId = parseInt(emailId as unknown as string, 10);
    if (!parsedEmailId) {
      throw new Error("Email ID is required for soft delete.");
    }
    const session = await getServerSession();
    const userId = session?.user?.id || "cmazo9djf0001l8ql0st224xj";
    if (!userId) {
      throw new Error("User ID is required for soft delete.");
    }
    const updatedEmail = await prisma.emailMessage.update({
      where: { id: parsedEmailId },
      data: {
        deletedAt: new Date(),
        deletedById: userId,
      },
    });
    return updatedEmail;
  } catch (error) {
    console.error("Error performing soft delete:", error);
    throw new Error("Failed to soft delete the email.");
  }
}

/**
 * Hide an email message.
 * @param emailId - ID of the email to hide.
 * @param userId - ID of the user performing the hide action.
 */
export async function hideEmailAction(emailId: number | string | undefined) {
  try {
    const parsedEmailId = parseInt(emailId as unknown as string, 10);
    const session = await getServerSession();
    const userId = session?.user?.id || "cmazo9djf0001l8ql0st224xj";
    if (!userId) {
      throw new Error("User ID is required for soft delete.");
    }
    if (!parsedEmailId) {
      throw new Error("Email ID is required to hide the email.");
    }
    const updatedEmail = await prisma.emailMessage.update({
      where: { id: parsedEmailId },
      data: {
        hideAt: new Date(),
        hideById: userId,
      },
    });
    return updatedEmail;
  } catch (error) {
    console.error("Error performing hide action:", error);
    throw new Error("Failed to hide the email.");
  }
}
