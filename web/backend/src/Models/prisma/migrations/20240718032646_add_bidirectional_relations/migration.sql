/*
  Warnings:

  - You are about to drop the column `mission` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `opportunities` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `problems` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `strengths` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `threats` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `values` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `vision` on the `Answer` table. All the data in the column will be lost.
  - Added the required column `content` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionID` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "answerId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    CONSTRAINT "Vote_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "questionID" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "impact" INTEGER,
    "effort" INTEGER,
    CONSTRAINT "Answer_questionID_fkey" FOREIGN KEY ("questionID") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Answer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Answer" ("id", "userId") SELECT "id", "userId" FROM "Answer";
DROP TABLE "Answer";
ALTER TABLE "new_Answer" RENAME TO "Answer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
