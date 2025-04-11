import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Project } from '../../projects/entities/project.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Project, project => project.comments)
  project: Project;
}
