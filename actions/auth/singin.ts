'use server'
import admin from "@/lib/firebase/firebase-server";
import { prisma } from "@/lib/prisma";

export async function signInWithFirebase(uid: string) {
  try {
    
    const user = await prisma.user.findFirst({where: {
      firebaseUid: uid
    }})

    console.log(user);
    const customClaims = {
      name: user?.name,
      role: user?.role,
      companyId: user?.companyId
      
    }  

    await admin.auth().setCustomUserClaims(uid, customClaims);

    return { success: true };
  } catch (error: any) {
    return { error: error.message };
  }
}
