import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Project } from 'src/entity/project.entity';
import { ProjectService } from 'src/service/project/project.service';

@Controller('api/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() project: Partial<Project>) {
    return this.projectService.create(project);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Get('feature')
  findProjectFeature() {
    return this.projectService.findProjectFeature();
  }
  @Get('hello')
  hello() {
    return this.projectService.hello();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: Partial<Project>) {
    return this.projectService.update(+id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
