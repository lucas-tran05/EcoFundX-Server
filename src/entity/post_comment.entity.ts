import {
  Entity,
  //   PrimaryGeneratedColumn,
  Column,
  //   CreateDateColumn,
  ManyToOne,
} from 'typeorm';
// import { User } from '../../users/entities/user.entity';
import { Post } from './post.entity';
import { User } from './user.entity';

import { ApplicationParanoia } from './application_paranoia';
@Entity()
export class PostComment extends ApplicationParanoia {
  @Column()
  content: string;

  @ManyToOne(() => User, user => user.postComments)
  user: User;

  @ManyToOne(() => Post, post => post.comments)
  post: Post;
}
