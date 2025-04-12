import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  //   getAllProjects() {
  //     throw new Error('Method not implemented.');
  //   }
  constructor(
    @InjectRepository(Project)
    private readonly usersRepo: Repository<Project>,
  ) {}
  getAllProjects(): Promise<Project[]> {
    return this.usersRepo.find();
    // console.log(this.usersRepo.find());
  }
  getProjectById(@Param('id') id: number): Promise<Project | null> {
    return this.usersRepo.findOne({
      select: {
        project_id: true,
        title: true,
      },
      where: { project_id: id },
      relations: [
        'rewards',
        'comments',
        'comments.user',
        'category',
        'category.projects',
      ],
    });
  }
}
