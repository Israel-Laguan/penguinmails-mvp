/*
  Warnings:

  - You are about to drop the column `planType` on the `Company` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELED', 'EXPIRED', 'PENDING', 'ON_HOLD');

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "planType";

-- DropEnum
DROP TYPE "PlanType";

-- CreateTable
CREATE TABLE "Subscriptions" (
    "id" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "planDetailId" TEXT NOT NULL,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
    "renovateBefore" TIMESTAMP(3),
    "payOn" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanDetails" (
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

    CONSTRAINT "PlanDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Subscriptions_companyId_idx" ON "Subscriptions"("companyId");

-- CreateIndex
CREATE INDEX "Subscriptions_planDetailId_idx" ON "Subscriptions"("planDetailId");

-- CreateIndex
CREATE UNIQUE INDEX "PlanDetails_name_key" ON "PlanDetails"("name");

-- AddForeignKey
ALTER TABLE "Subscriptions" ADD CONSTRAINT "Subscriptions_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscriptions" ADD CONSTRAINT "Subscriptions_planDetailId_fkey" FOREIGN KEY ("planDetailId") REFERENCES "PlanDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
