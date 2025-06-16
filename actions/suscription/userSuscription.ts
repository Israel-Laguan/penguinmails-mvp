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

export async function changeSubscriptionPlanAction(companyId: number, planId: string, isFreePlan: boolean) {
  try {

    await prisma.subscription.upsert({
      where: {
        companyId,
      },
      update: {
        planDetailId: planId,
        payOn: null,
        renovateBefore: isFreePlan ? null : new Date(),
        status: isFreePlan ? 'ACTIVE' : 'ON_HOLD'
      },
      create: {
        planDetailId: planId,
        companyId,
        payOn: null,
        renovateBefore: isFreePlan ? null : new Date(),
        status: isFreePlan ? 'ACTIVE' : 'ON_HOLD'
      }
    });

    return { ok: true, message: "Suscription change successfully." };

  } catch (error: any) {
    console.error("Error registering user:", error);
    return { ok: false, error: error.message };
  }
}
