"use server"
import { authServer } from "@/lib/firebase/firebase-server";
import { prisma } from "@/lib/prisma";

type RegisterUserData = {
  email: string;
  password: string;
  name: string;
  companyName: string;
  planType?: string;
  businessId?: string;
  referralCode?: string;
};

export async function registerUserAction(data: RegisterUserData) {
  try {
    const firebaseUser = await authServer.createUser({
      email: data.email,
      password: data.password,
      displayName: data.name,
    });
    
    const user = await prisma.user.create({
      data: {
        firebaseUid: firebaseUser.uid,
        email: data.email,
        name: data.name,
        role: "MEMBER",
        image: "https://avatar.iran.liara.run/public/2"
      },
    });

    return { ok: true };
  } catch (error: any) {
    console.error("Error registering user:", error);
    return { ok: false, error: error.message };
  }
}
