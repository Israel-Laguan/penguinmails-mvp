"use server"
import { prisma } from "@/lib/prisma";

export async function getSuscriptionPlanAction(companyId: number) {
  try {
    const companySuscription = await prisma.subscription.findFirst({
      where: {
        companyId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        renovateBefore: true,
        planDetail: {
          omit: {
            createdAt: true,
            updatedAt: true,
          }
        },
      }
    });

    return { ok: true, suscription: companySuscription };
  } catch (error: any) {
    console.error("Error registering user:", error);
    return { ok: false, error: error.message };
  }
}
