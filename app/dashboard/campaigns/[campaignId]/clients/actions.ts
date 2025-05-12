"use server";

import { prisma } from "@/lib/prisma";

export async function getClientsPage(
  campaignId: string,
  page: number,
  limit: number = 10
) {
  const skip = (page - 1) * limit;

  const [campaignClients, total] = await Promise.all([
    prisma.campaignClient.findMany({
      where: {
        campaignId: parseInt(campaignId),
      },
      include: {
        client: true,
      },
      skip,
      take: limit,
    }),
    prisma.campaignClient.count({
      where: {
        campaignId: parseInt(campaignId),
      },
    }),
  ]);

  const clients = campaignClients.map((campaignClient) => {
    return campaignClient.client;
  });

  return {
    clients,
    total,
    pages: Math.ceil(total / limit),
  };
}
