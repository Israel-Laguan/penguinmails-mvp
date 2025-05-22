import { prisma } from "@/lib/prisma";

export async function fetchEmailById(id: string) {
  const parsedId = parseInt(id as unknown as string, 10);

    const email = await prisma.emailMessage.findFirst({
      where: {
        id: parsedId,
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
  }
