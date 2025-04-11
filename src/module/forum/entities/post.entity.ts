import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { PostComment } from './post-comment.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  post_id: number;

  @Column()
  content: string;

  @Column()
  like: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, user => user.posts)
  user: User;

  @OneToMany(() => PostComment, postComment => postComment.post)
  comments: PostComment[];
}
