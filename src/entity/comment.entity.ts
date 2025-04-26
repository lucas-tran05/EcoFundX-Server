import { Entity, Column, ManyToOne } from 'typeorm';
import { Project } from './project.entity';
// import { ApplicationEntity } from './application_entity';
import { ApplicationParanoia } from './application_paranoia';
import { User } from './user.entity';

@Entity()
export class Comment extends ApplicationParanoia {
  @Column()
  content: string;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Project, project => project.comments)
  project: Project;
}
