-- AlterTable
ALTER TABLE "EmailMessage" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedById" TEXT,
ADD COLUMN     "hideAt" TIMESTAMP(3),
ADD COLUMN     "hideById" TEXT;

-- CreateIndex
CREATE INDEX "EmailMessage_hideById_idx" ON "EmailMessage"("hideById");

-- CreateIndex
CREATE INDEX "EmailMessage_deletedById_idx" ON "EmailMessage"("deletedById");

-- AddForeignKey
ALTER TABLE "EmailMessage" ADD CONSTRAINT "EmailMessage_hideById_fkey" FOREIGN KEY ("hideById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailMessage" ADD CONSTRAINT "EmailMessage_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
