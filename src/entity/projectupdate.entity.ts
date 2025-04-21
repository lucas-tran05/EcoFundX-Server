import {
  Entity,
  //   PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
// import { Project } from '../../projects/entities/project.entity';
import { ApplicationParanoia } from './application_paranoia';
import { Project } from './project.entity';

@Entity()
export class ProjectUpdate extends ApplicationParanoia {
  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => Project, project => project.updates)
  project: Project;
}
