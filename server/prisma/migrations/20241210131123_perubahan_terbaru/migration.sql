/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `user` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Inactive');

-- AlterTable
ALTER TABLE "product" DROP COLUMN "isDeleted",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Active';

-- AlterTable
ALTER TABLE "user" DROP COLUMN "isDeleted",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Active';
