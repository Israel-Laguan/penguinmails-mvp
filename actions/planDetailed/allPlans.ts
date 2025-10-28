"use server"
import { PlanDetails } from "@/components/settings/types";
import { prisma } from "@/lib/prisma";

export async function getPricingPlansDetailedsAction() {
  try {
    const plans = await prisma.planDetail.findMany({
      omit: { createdAt: true, updatedAt: true }
    });

    return { ok: true, plans: plans || [] };
  } catch (error: any) {
    console.error("Error registering user:", error);
    return { ok: false, error: error.message, plans: [] as PlanDetails[] };
  }
}
