/*
  Warnings:

  - You are about to drop the column `planType` on the `Company` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELED', 'EXPIRED', 'PENDING', 'ON_HOLD', 'FREE_DOWNGRADED');

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "planType";

-- DropEnum
DROP TYPE "PlanType";

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "planDetailId" TEXT NOT NULL,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
    "renovateBefore" TIMESTAMP(3),
    "paidOn" TIMESTAMP(3),
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanDetail" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isMonthly" BOOLEAN NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "maxEmailAccounts" INTEGER NOT NULL,
    "maxCampaigns" INTEGER NOT NULL,
    "maxEmailsPerMonth" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Subscription_companyId_idx" ON "Subscription"("companyId");

-- CreateIndex
CREATE INDEX "Subscription_planDetailId_idx" ON "Subscription"("planDetailId");

-- CreateIndex
CREATE UNIQUE INDEX "PlanDetail_name_key" ON "PlanDetail"("name");

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planDetailId_fkey" FOREIGN KEY ("planDetailId") REFERENCES "PlanDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
