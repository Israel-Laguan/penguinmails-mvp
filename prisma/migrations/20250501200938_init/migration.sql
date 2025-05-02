-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('FREE', 'STARTER', 'PRO');

-- CreateEnum
CREATE TYPE "CampaignStatus" AS ENUM ('DRAFT', 'ACTIVE', 'PAUSED', 'COMPLETED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ClientCampaignStatus" AS ENUM ('PENDING', 'ACTIVE', 'PAUSED', 'FINISHED', 'REMOVED', 'BOUNCED', 'UNSUBSCRIBED');

-- CreateEnum
CREATE TYPE "ThemePreference" AS ENUM ('LIGHT', 'DARK', 'CONTRAST');

-- CreateEnum
CREATE TYPE "LayoutDensity" AS ENUM ('COMPACT', 'NORMAL', 'WIDE');

-- CreateEnum
CREATE TYPE "EmailEventType" AS ENUM ('SENT', 'DELIVERED', 'OPENED', 'CLICKED', 'BOUNCED', 'SPAM_COMPLAINT', 'UNSUBSCRIBED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "passwordHash" TEXT,
    "companyId" INTEGER,
    "role" "UserRole" NOT NULL DEFAULT 'MEMBER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "planType" "PlanType" NOT NULL DEFAULT 'FREE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "notes" TEXT,
    "companyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Template" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "bodyHtml" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "CampaignStatus" NOT NULL DEFAULT 'DRAFT',
    "companyId" INTEGER NOT NULL,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignStep" (
    "id" SERIAL NOT NULL,
    "sequenceOrder" INTEGER NOT NULL,
    "delayDays" INTEGER NOT NULL,
    "templateId" INTEGER NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sendDays" TEXT,
    "sendTimeStart" TEXT,
    "sendTimeEnd" TEXT,

    CONSTRAINT "CampaignStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignClient" (
    "campaignId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "statusInCampaign" "ClientCampaignStatus" NOT NULL DEFAULT 'PENDING',
    "currentStepOrder" INTEGER,
    "nextSendTime" TIMESTAMP(3),
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CampaignClient_pkey" PRIMARY KEY ("campaignId","clientId")
);

-- CreateTable
CREATE TABLE "EmailEvent" (
    "id" SERIAL NOT NULL,
    "type" "EmailEventType" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "campaignId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "campaignStepId" INTEGER,
    "campaignClientId" INTEGER,
    "metadata" TEXT,

    CONSTRAINT "EmailEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreference" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "theme" "ThemePreference" NOT NULL DEFAULT 'LIGHT',
    "layoutDensity" "LayoutDensity" NOT NULL DEFAULT 'NORMAL',
    "timezone" TEXT NOT NULL DEFAULT 'UTC',

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_companyId_idx" ON "User"("companyId");

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Company_stripeCustomerId_key" ON "Company"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "Company_stripeCustomerId_idx" ON "Company"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "Client_companyId_idx" ON "Client"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_companyId_email_key" ON "Client"("companyId", "email");

-- CreateIndex
CREATE INDEX "Template_companyId_idx" ON "Template"("companyId");

-- CreateIndex
CREATE INDEX "Template_createdById_idx" ON "Template"("createdById");

-- CreateIndex
CREATE INDEX "Campaign_companyId_idx" ON "Campaign"("companyId");

-- CreateIndex
CREATE INDEX "Campaign_createdById_idx" ON "Campaign"("createdById");

-- CreateIndex
CREATE INDEX "CampaignStep_templateId_idx" ON "CampaignStep"("templateId");

-- CreateIndex
CREATE INDEX "CampaignStep_campaignId_idx" ON "CampaignStep"("campaignId");

-- CreateIndex
CREATE UNIQUE INDEX "CampaignStep_campaignId_sequenceOrder_key" ON "CampaignStep"("campaignId", "sequenceOrder");

-- CreateIndex
CREATE INDEX "CampaignClient_clientId_idx" ON "CampaignClient"("clientId");

-- CreateIndex
CREATE INDEX "CampaignClient_campaignId_idx" ON "CampaignClient"("campaignId");

-- CreateIndex
CREATE INDEX "EmailEvent_campaignId_clientId_type_idx" ON "EmailEvent"("campaignId", "clientId", "type");

-- CreateIndex
CREATE INDEX "EmailEvent_campaignStepId_idx" ON "EmailEvent"("campaignStepId");

-- CreateIndex
CREATE INDEX "EmailEvent_campaignId_campaignClientId_idx" ON "EmailEvent"("campaignId", "campaignClientId");

-- CreateIndex
CREATE INDEX "EmailEvent_clientId_idx" ON "EmailEvent"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_userId_key" ON "UserPreference"("userId");

-- CreateIndex
CREATE INDEX "UserPreference_userId_idx" ON "UserPreference"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignStep" ADD CONSTRAINT "CampaignStep_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignStep" ADD CONSTRAINT "CampaignStep_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignClient" ADD CONSTRAINT "CampaignClient_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignClient" ADD CONSTRAINT "CampaignClient_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailEvent" ADD CONSTRAINT "EmailEvent_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailEvent" ADD CONSTRAINT "EmailEvent_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailEvent" ADD CONSTRAINT "EmailEvent_campaignStepId_fkey" FOREIGN KEY ("campaignStepId") REFERENCES "CampaignStep"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailEvent" ADD CONSTRAINT "EmailEvent_campaignId_campaignClientId_fkey" FOREIGN KEY ("campaignId", "campaignClientId") REFERENCES "CampaignClient"("campaignId", "clientId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
