import { Controller, Get } from '@nestjs/common';
import { ChartsService } from './charts.service';

@Controller('graficos')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  @Get('proyectos-iniciados-finalizados')
  async getProyectosIniciadosFinalizados() {
    return this.chartsService.getStartedFinishedProjects();
  }
}
