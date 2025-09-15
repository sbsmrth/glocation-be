import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ProjectsModule, CommonModule, CommonModule],
})
export class AppModule {}
