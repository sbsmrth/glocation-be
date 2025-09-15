/*
  Warnings:

  - You are about to drop the column `fechgaInicio` on the `Proyecto` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nombre]` on the table `Proyecto` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Proyecto" DROP COLUMN "fechgaInicio",
ADD COLUMN     "fechaInicio" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Proyecto_nombre_key" ON "public"."Proyecto"("nombre");
