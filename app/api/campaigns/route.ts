import { prisma } from "@/lib/prisma"

export async function GET() {
  const campaigns = await prisma.campaign.findMany({
    include: {
      clients: true,
      emailEvents: {
        select: {
          type: true,
          timestamp: true
        }
      }
    }
  });

  return Response.json(campaigns);
}
