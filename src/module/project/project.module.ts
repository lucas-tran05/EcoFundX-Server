import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from 'src/controller/project/project.controller';
import { Project } from 'src/entity/project.entity';
import { ProjectService } from 'src/service/project/project.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
