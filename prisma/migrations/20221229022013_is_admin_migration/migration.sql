/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Rider` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Rider" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Rider_email_key" ON "Rider"("email");
