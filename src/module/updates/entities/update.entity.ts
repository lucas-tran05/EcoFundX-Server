import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity()
export class ProjectUpdate {
  @PrimaryGeneratedColumn()
  update_id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => Project, project => project.updates)
  project: Project;
}
