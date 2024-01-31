/*
  Warnings:

  - You are about to drop the column `gameType` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `questionType` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "gameType";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "questionType";
