import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Post } from './post.entity';
@Entity()
export class PostComment {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, user => user.postComments)
  user: User;

  @ManyToOne(() => Post, post => post.comments)
  post: Post;
}
