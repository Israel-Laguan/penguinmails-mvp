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

    const currentSubscription = await prisma.subscription.findFirst({
      where: {
        companyId,
        status: {
          in: ['ACTIVE', 'PENDING']
        }
      },
      select: {
        id: true,
        planDetail: {
          select: {
            id: true,
          }
        }
      }
    });

    const isPlanChanging = currentSubscription?.planDetail.id !== planId;

    if ((!isFreePlan && isPlanChanging) || (isFreePlan && !isPlanChanging))
      return { ok: true, message: 'Subscription change successfully.' };

    await prisma.subscription.create({
      data: {
        planDetailId: planId,
        companyId,
        paidOn: null,
        renovateBefore: isFreePlan ? null : new Date(),
        status: isFreePlan ? 'ACTIVE' : 'PENDING'
      }
    });

    return { ok: true, message: 'Subscription change successfully.' };

  } catch (error: any) {
    console.error("Error registering user:", error);
    return { ok: false, error: error.message };
  }
}
