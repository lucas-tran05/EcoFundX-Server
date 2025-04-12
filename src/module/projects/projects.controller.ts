import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @Get('api/projects')
  getAllProjects() {
    return this.projectsService.getAllProjects();
  }
  @Get('api/projects/:id')
  getProjectById(@Param('id') id: number) {
    // console.log(this.projectsService.getProjectById(id));
    const project = this.projectsService.getProjectById(id);
    return project;
  }
}
