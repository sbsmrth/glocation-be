-- CreateEnum
CREATE TYPE "public"."EstadoProyecto" AS ENUM ('EN_PROGRESO', 'FINALIZADO', 'CANCELADO', 'SIN_INICIAR', 'BLOQUEADO');

-- CreateTable
CREATE TABLE "public"."Proyecto" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "estado" "public"."EstadoProyecto" NOT NULL DEFAULT 'SIN_INICIAR',
    "fechgaInicio" TIMESTAMP(3),
    "fechaFin" TIMESTAMP(3),
    "fechaCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("id")
);
