import * as Prisma from '@/app/api/generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
 
const globalForPrisma = globalThis as unknown as { prisma: Prisma.PrismaClient }
 
export const prisma = globalForPrisma.prisma || new Prisma.PrismaClient().$extends(withAccelerate())
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
export const types = Prisma
