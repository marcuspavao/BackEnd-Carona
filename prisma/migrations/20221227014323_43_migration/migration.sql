/*
  Warnings:

  - A unique constraint covering the columns `[riderId]` on the table `Car` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Rider" DROP CONSTRAINT "Rider_carId_fkey";

-- DropIndex
DROP INDEX "Rider_carId_key";

-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "riderId" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Rider" ALTER COLUMN "carId" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Car_riderId_key" ON "Car"("riderId");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_riderId_fkey" FOREIGN KEY ("riderId") REFERENCES "Rider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
