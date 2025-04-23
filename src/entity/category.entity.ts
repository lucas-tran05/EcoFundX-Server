import { Entity, Column, OneToMany } from 'typeorm';
import { Project } from './project.entity';
// import { ApplicationParanoia } from './application_paranoia';
import { ApplicationEntity } from './application_entity';
// Ensure the file exists at this path or adjust the path accordingly

@Entity()
export class Category extends ApplicationEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Project, (project) => project.category)
  projects: Project[];
}
