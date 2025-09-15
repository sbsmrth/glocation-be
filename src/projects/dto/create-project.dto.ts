import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { EstadoProyecto } from 'generated/prisma';

export class CreateProjectDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El nombre no puede exceder los 100 caracteres' })
  nombre: string;

  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @IsOptional()
  descripcion?: string;

  @IsEnum(EstadoProyecto)
  @IsOptional()
  estado?: EstadoProyecto;

  @IsOptional()
  @IsDateString({ strict: true, strictSeparator: true })
  fechaInicio?: Date;

  @IsOptional()
  @IsDateString({ strict: true, strictSeparator: true })
  fechaFin?: Date;
}
