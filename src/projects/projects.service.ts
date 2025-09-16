import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from '../providers/prisma.service';
import { EstadoProyecto, Proyecto } from 'generated/prisma';
import { isUUID } from 'class-validator';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}
  create(createProjectDto: CreateProjectDto) {
    return this.prisma.proyecto.create({ data: createProjectDto });
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    return this.prisma.proyecto.findMany({
      take: limit,
      skip: offset,
    });
  }

  async findOne(term: string) {
    let project: Proyecto | null = null;

    if (isUUID(term)) {
      project = await this.prisma.proyecto.findUnique({ where: { id: term } });
    } else {
      project = await this.prisma.proyecto.findFirst({
        where: { nombre: { equals: term, mode: 'insensitive' } },
      });
    }

    if (!project) {
      throw new NotFoundException(
        `Proyecto con identificador "${term}" no encontrado`,
      );
    }

    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const existing = await this.findOne(id);

    const {
      fechaInicio: startDate,
      fechaFin: endDate,
      estado,
    } = updateProjectDto;

    if (startDate && endDate) this.validateDates({ startDate, endDate });
    this.validateStateRules({ startDate, endDate, estado, existing });

    return this.prisma.proyecto.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  remove(id: string) {
    return this.prisma.proyecto.delete({ where: { id } });
  }

  async getProjectsAggregates() {
    const [data] = await this.prisma.$queryRaw<
      {
        total: bigint;
        finalizados: bigint;
        promedio_dias: number | null;
        no_iniciados_5_dias: bigint;
      }[]
    >`
      SELECT
        COUNT(*) AS total,
        COUNT(*) FILTER (WHERE estado = 'FINALIZADO') AS finalizados,
        AVG(EXTRACT(EPOCH FROM ("fechaFin" - "fechaInicio")) / 86400) AS promedio_dias,
        COUNT(*) FILTER (
          WHERE estado = 'SIN_INICIAR'
          AND "fechaCreation" <= NOW() - INTERVAL '5 days'
        ) AS no_iniciados_5_dias
      FROM "Proyecto";
    `;

    return {
      total: Number(data.total),
      promFinalizacionDias: data.promedio_dias ? Number(data.promedio_dias) : 0,
      tasaFinalizacion:
        Number(data.total) > 0
          ? (Number(data.finalizados) / Number(data.total)) * 100
          : 0,
      noIniciadosMas5Dias: Number(data.no_iniciados_5_dias),
    };
  }

  private validateDates({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) {
    if (new Date(endDate) < new Date(startDate)) {
      throw new BadRequestException(
        'La fecha de fin no puede ser anterior a la fecha de inicio',
      );
    }
  }

  private validateStateRules({
    startDate,
    endDate,
    estado,
    existing,
  }: {
    startDate?: string;
    endDate?: string;
    estado?: EstadoProyecto;
    existing: Proyecto;
  }) {
    // No permitir modificar estado si ya está finalizado
    if (
      existing.estado === EstadoProyecto.FINALIZADO &&
      estado &&
      estado !== EstadoProyecto.FINALIZADO
    ) {
      throw new BadRequestException(
        `No se puede cambiar el estado de un proyecto ya finalizado`,
      );
    }

    // Reglas de fechas según estado
    if (estado === EstadoProyecto.EN_PROGRESO && !startDate) {
      throw new BadRequestException(
        'Se requiere una fecha de inicio para marcar el proyecto como EN_PROGRESO',
      );
    }

    if (estado === EstadoProyecto.FINALIZADO && !endDate) {
      throw new BadRequestException(
        'Se requiere una fecha de fin para marcar el proyecto como FINALIZADO',
      );
    }

    if (estado && estado !== EstadoProyecto.FINALIZADO && endDate) {
      throw new BadRequestException(
        `Un proyecto con estado "${estado}" no debe tener fecha de fin`,
      );
    }

    // Validar transiciones de estado
    this.validateStateTransition(existing.estado, estado);
  }

  private validateStateTransition(
    current: EstadoProyecto,
    next?: EstadoProyecto,
  ) {
    if (!next || current === next) return;

    const validTransitions: Record<EstadoProyecto, EstadoProyecto[]> = {
      [EstadoProyecto.SIN_INICIAR]: [
        EstadoProyecto.EN_PROGRESO,
        EstadoProyecto.CANCELADO,
        EstadoProyecto.BLOQUEADO,
      ],
      [EstadoProyecto.EN_PROGRESO]: [
        EstadoProyecto.FINALIZADO,
        EstadoProyecto.CANCELADO,
        EstadoProyecto.BLOQUEADO,
      ],
      [EstadoProyecto.FINALIZADO]: [],
      [EstadoProyecto.CANCELADO]: [],
      [EstadoProyecto.BLOQUEADO]: [
        EstadoProyecto.EN_PROGRESO,
        EstadoProyecto.CANCELADO,
      ],
    };

    if (!validTransitions[current].includes(next)) {
      throw new BadRequestException(
        `Transición inválida: no se puede pasar de ${current} a ${next}`,
      );
    }
  }
}
