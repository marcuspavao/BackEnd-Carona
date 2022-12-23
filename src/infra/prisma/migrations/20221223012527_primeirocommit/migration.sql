/*
  Warnings:

  - You are about to drop the column `arrivaLocal` on the `Ride` table. All the data in the column will be lost.
  - Added the required column `arrivalLocal` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ride" DROP COLUMN "arrivaLocal",
ADD COLUMN     "arrivalLocal" TEXT NOT NULL;
