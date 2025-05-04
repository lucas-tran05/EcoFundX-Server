import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';

import { ApplicationParanoia } from './application_paranoia';
import { User } from './user.entity';
import { PostComment } from './post_comment.entity';

@Entity()
export class PostForum extends ApplicationParanoia {
  @Column()
  content: string;

  @Column()
  like: number;

  @ManyToOne(() => User, user => user.posts)
  user: User;

  @OneToMany(() => PostComment, postComment => postComment.post)
  comments: PostComment[];
}
