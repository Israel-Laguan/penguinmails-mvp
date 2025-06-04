'use server'
import admin from "@/lib/firebase/firebase-server";
import { prisma } from "@/lib/prisma";

export async function signInWithFirebase(uid: string) {
  try {
    /*
    const user = prisma.user.findFirst({where: {
      id: uid
    }})
    */
    await admin.auth().setCustomUserClaims(uid, {
      role: "tester",
      accessLevel: 1,
    });

    return { success: true };
  } catch (error: any) {
    return { error: error.message };
  }
}
