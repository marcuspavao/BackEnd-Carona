/*
  Warnings:

  - A unique constraint covering the columns `[riderId]` on the table `Ride` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Rider" ADD COLUMN     "email" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "password" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "passwordConfirmation" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Ride_riderId_key" ON "Ride"("riderId");
