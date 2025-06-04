'use server';

import { prisma } from "@/lib/prisma";

export async function registerUserAction(data: object) {
  try {

    const user = await prisma.user.create({data})

    return user
  } catch (error: any) {
    console.error("Error fetching user by firebaseUid:", error);
    return { ok: false, error: error.message };
  }
}
