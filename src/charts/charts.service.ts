import { Injectable } from '@nestjs/common';
import { PrismaService } from '../providers/prisma.service';

@Injectable()
export class ChartsService {
  constructor(private readonly prisma: PrismaService) {}

  async getStartedFinishedProjects() {
    const days = 29;
    const today = new Date();
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    startDate.setDate(today.getDate() - days);

    const projects = await this.prisma.proyecto.findMany({
      where: {
        OR: [
          { fechaInicio: { gte: startDate, lte: today } },
          { fechaFin: { gte: startDate, lte: today } },
        ],
      },
      select: {
        fechaFin: true,
        fechaInicio: true,
      },
    });

    const map: Record<string, { iniciados: number; finalizados: number }> = {};
    for (let i = 0; i <= days; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const key = date.toISOString().split('T')[0]; // YYYY-MM-DD
      map[key] = { iniciados: 0, finalizados: 0 };
    }

    projects.forEach((project) => {
      // Contar proyectos iniciados
      if (project.fechaInicio) {
        const key = project.fechaInicio.toISOString().split('T')[0];
        if (map[key]) map[key].iniciados++;
      }

      // Contar proyectos finalizados
      if (project.fechaFin) {
        const key = project.fechaFin.toISOString().split('T')[0];
        if (map[key]) map[key].finalizados++;
      }
    });

    return Object.entries(map).map(([date, values]) => ({
      fecha: date,
      ...values,
    }));
  }
}
