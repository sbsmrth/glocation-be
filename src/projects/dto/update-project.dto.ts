import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { IsDateString, IsEnum, IsOptional } from 'class-validator';
import { EstadoProyecto } from 'generated/prisma';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @IsEnum(EstadoProyecto)
  @IsOptional()
  estado?: EstadoProyecto;

  @IsOptional()
  @IsDateString({ strict: true, strictSeparator: true })
  fechaInicio?: string;

  @IsOptional()
  @IsDateString({ strict: true, strictSeparator: true })
  fechaFin?: string;
}
