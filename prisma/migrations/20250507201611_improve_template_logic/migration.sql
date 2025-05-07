/*
  Warnings:

  - Added the required column `body` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PersonalizationTagType" AS ENUM ('COMPANY', 'MARKETING', 'CLIENT', 'CUSTOM');

-- CreateEnum
CREATE TYPE "TemplateCategory" AS ENUM ('OUTREACH', 'INTRODUCTION', 'FOLLOW_UP', 'MEETING', 'VALUE', 'SAAS', 'AGENCY', 'CONSULTING', 'ECOMMERCE', 'REAL_ESTATE', 'HR', 'FINANCE', 'HEALTHCARE');

-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "category" "TemplateCategory" NOT NULL;

-- CreateTable
CREATE TABLE "PersonalizationTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "visualText" TEXT NOT NULL,
    "description" TEXT,
    "defaultValue" TEXT,
    "type" "PersonalizationTagType" NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonalizationTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateTag" (
    "id" SERIAL NOT NULL,
    "templateId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemplateTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PersonalizationTag_companyId_idx" ON "PersonalizationTag"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalizationTag_companyId_identifier_key" ON "PersonalizationTag"("companyId", "identifier");

-- CreateIndex
CREATE INDEX "TemplateTag_templateId_idx" ON "TemplateTag"("templateId");

-- CreateIndex
CREATE INDEX "TemplateTag_tagId_idx" ON "TemplateTag"("tagId");

-- CreateIndex
CREATE UNIQUE INDEX "TemplateTag_templateId_tagId_key" ON "TemplateTag"("templateId", "tagId");

-- AddForeignKey
ALTER TABLE "PersonalizationTag" ADD CONSTRAINT "PersonalizationTag_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateTag" ADD CONSTRAINT "TemplateTag_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateTag" ADD CONSTRAINT "TemplateTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "PersonalizationTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
