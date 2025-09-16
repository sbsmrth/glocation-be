import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { CommonModule } from './common/common.module';
import { ChartsModule } from './charts/charts.module';
import { AnalisisModule } from './analisis/analisis.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProjectsModule,
    CommonModule,
    CommonModule,
    ChartsModule,
    AnalisisModule,
  ],
})
export class AppModule {}
