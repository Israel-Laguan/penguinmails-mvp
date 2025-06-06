'use server'
import admin from "@/lib/firebase/firebase-server";
import { prisma } from "@/lib/prisma";
import { ERROR_CODES } from "@/lib/responses/errors";
import { CODES_SUCCESS } from "@/lib/responses/success";

export async function signInWithFirebase(uid: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        firebaseUid: uid,
      },
      select: {
        name: true,
        role: true,
        company: {
          select: {
            id: true,
            name: true,
            planType: true
          }
        }
      },
    });
    

    const customClaims = {
      name: user?.name,
      role: user?.role,
      companyId: user?.company?.id,
      companyName: user?.company?.name,
      plan: user?.company?.planType,
    };

    await admin.auth().setCustomUserClaims(uid, customClaims);

    return CODES_SUCCESS.QUERY_OK;
  } catch (error: any) {
    return { error: error.message, ...ERROR_CODES.BAD_REQUEST };
  }
}
