import { Module } from '@nestjs/common';
import { AnalisisService } from './analisis.service';
import { AnalisisController } from './analisis.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/providers/prisma.service';

@Module({
  controllers: [AnalisisController],
  providers: [AnalisisService, PrismaService],
  imports: [ConfigModule],
})
export class AnalisisModule {}
