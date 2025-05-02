-- CreateEnum
CREATE TYPE "EmailAccountStatus" AS ENUM ('PENDING', 'ACTIVE', 'ISSUE', 'SUSPENDED', 'DELETED');

-- CreateEnum
CREATE TYPE "WarmupStatus" AS ENUM ('NOT_STARTED', 'WARMING', 'WARMED', 'PAUSED');

-- CreateEnum
CREATE TYPE "DomainStatus" AS ENUM ('PENDING', 'VERIFIED', 'SETUP_REQUIRED', 'FAILED', 'DELETED');

-- CreateTable
CREATE TABLE "EmailAccount" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "status" "EmailAccountStatus" NOT NULL DEFAULT 'PENDING',
    "reputation" INTEGER NOT NULL DEFAULT 0,
    "warmupStatus" "WarmupStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "dayLimit" INTEGER NOT NULL DEFAULT 100,
    "sent24h" INTEGER NOT NULL DEFAULT 0,
    "lastSync" TIMESTAMP(3),
    "spf" BOOLEAN NOT NULL DEFAULT false,
    "dkim" BOOLEAN NOT NULL DEFAULT false,
    "dmarc" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "EmailAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Domain" (
    "id" SERIAL NOT NULL,
    "domain" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "status" "DomainStatus" NOT NULL DEFAULT 'PENDING',
    "daysActive" INTEGER NOT NULL DEFAULT 0,
    "reputation" INTEGER NOT NULL DEFAULT 0,
    "spf" BOOLEAN NOT NULL DEFAULT false,
    "dkim" BOOLEAN NOT NULL DEFAULT false,
    "dmarc" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EmailAccount_companyId_idx" ON "EmailAccount"("companyId");

-- CreateIndex
CREATE INDEX "EmailAccount_createdById_idx" ON "EmailAccount"("createdById");

-- CreateIndex
CREATE UNIQUE INDEX "EmailAccount_companyId_email_key" ON "EmailAccount"("companyId", "email");

-- CreateIndex
CREATE INDEX "Domain_companyId_idx" ON "Domain"("companyId");

-- CreateIndex
CREATE INDEX "Domain_createdById_idx" ON "Domain"("createdById");

-- CreateIndex
CREATE UNIQUE INDEX "Domain_companyId_domain_key" ON "Domain"("companyId", "domain");

-- AddForeignKey
ALTER TABLE "EmailAccount" ADD CONSTRAINT "EmailAccount_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailAccount" ADD CONSTRAINT "EmailAccount_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Domain" ADD CONSTRAINT "Domain_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Domain" ADD CONSTRAINT "Domain_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
