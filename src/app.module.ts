import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { CommonModule } from './common/common.module';
import { ChartsModule } from './charts/charts.module';

@Module({
  imports: [ProjectsModule, CommonModule, CommonModule, ChartsModule],
})
export class AppModule {}
