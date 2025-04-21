import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from './project.entity';
import { ApplicationEntity } from './application_entity';

@Entity()
export class Allocation extends ApplicationEntity {
  @Column()
  title: string;

  @Column()
  allocation: number;

  @ManyToOne(() => Project, (project) => project.allocations)
  project: Project;
}
