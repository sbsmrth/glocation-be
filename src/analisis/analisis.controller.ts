import { Controller, Get } from '@nestjs/common';
import { AnalisisService } from './analisis.service';

@Controller('analisis')
export class AnalisisController {
  constructor(private readonly analisisService: AnalisisService) {}

  @Get()
  async analizar() {
    const resumen = await this.analisisService.generarResumen();
    return { resumen };
  }
}
