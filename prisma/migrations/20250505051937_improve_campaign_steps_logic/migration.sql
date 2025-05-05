/*
  Warnings:

  - You are about to drop the column `sendDays` on the `CampaignStep` table. All the data in the column will be lost.
  - You are about to drop the column `sendTimeEnd` on the `CampaignStep` table. All the data in the column will be lost.
  - You are about to drop the column `sendTimeStart` on the `CampaignStep` table. All the data in the column will be lost.
  - Added the required column `fromEmail` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromName` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `delayHours` to the `CampaignStep` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CampaignEventContition" AS ENUM ('ALWAYS', 'IF_NOT_OPENED', 'IF_NOT_CLICKED', 'IF_NOT_REPLIED', 'IF_OPTION_A', 'IF_OPTION_B', 'IF_OPTION_C', 'IF_OPTION_D', 'IF_OPTION_E', 'IF_UNSUBSCRIBED');

-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "emailsPerDay" INTEGER,
ADD COLUMN     "fromEmail" TEXT NOT NULL,
ADD COLUMN     "fromName" TEXT NOT NULL,
ADD COLUMN     "metrics" JSONB,
ADD COLUMN     "sendDays" INTEGER[],
ADD COLUMN     "sendTimeEnd" TEXT,
ADD COLUMN     "sendTimeStart" TEXT,
ADD COLUMN     "timezone" TEXT NOT NULL DEFAULT 'UTC';

-- AlterTable
ALTER TABLE "CampaignStep" DROP COLUMN "sendDays",
DROP COLUMN "sendTimeEnd",
DROP COLUMN "sendTimeStart",
ADD COLUMN     "condition" "CampaignEventContition" NOT NULL DEFAULT 'ALWAYS',
ADD COLUMN     "delayHours" INTEGER NOT NULL;
