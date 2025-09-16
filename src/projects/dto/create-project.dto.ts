import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateProjectDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(40, { message: 'El nombre no puede exceder los 100 caracteres' })
  nombre: string;

  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @IsOptional()
  @MinLength(10)
  @MaxLength(200)
  descripcion: string;
}
