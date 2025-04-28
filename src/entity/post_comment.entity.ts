import {
  Entity,
  //   PrimaryGeneratedColumn,
  Column,
  //   CreateDateColumn,
  ManyToOne,
} from 'typeorm';
// import { User } from '../../users/entities/user.entity';
import { PostForum } from './post.entity';
import { User } from './user.entity';

import { ApplicationParanoia } from './application_paranoia';
@Entity()
export class PostComment extends ApplicationParanoia {
  @Column()
  content: string;

  @ManyToOne(() => User, user => user.postComments)
  user: User;

  @ManyToOne(() => PostForum, post => post.comments)
  post: PostForum;
}
