/*
  Warnings:

  - You are about to drop the column `is_verified` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `reset_token` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `reset_token_expires_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verification_token` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verification_token_expires_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "is_verified",
DROP COLUMN "reset_token",
DROP COLUMN "reset_token_expires_at",
DROP COLUMN "verification_token",
DROP COLUMN "verification_token_expires_at";
