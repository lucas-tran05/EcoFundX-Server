import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
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
  @JoinColumn({ name: 'project_id' })
  project: Project;
}
