import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from '../providers/prisma.service';
import { Proyecto } from 'generated/prisma';
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
    return this.prisma.proyecto.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  remove(id: string) {
    return this.prisma.proyecto.delete({ where: { id } });
  }
}
