import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Project } from '../../projects/entities/project.entity';
import { Investment } from '../../investments/entities/investment.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';
import { Post } from '../../forum/entities/post.entity';
import { PostComment } from '../../forum/entities/post-comment.entity';
import { Comment } from '../../comments/entities/comment.entity';
// import { Transaction } from '../../transactions/entities/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => Investment, investment => investment.user)
  investments: Investment[];

  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions: Transaction[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(() => Post, post => post.user)
  posts: Post[];

  @OneToMany(() => PostComment, postComment => postComment.user)
  postComments: PostComment[];

  @OneToMany(() => Project, project => project.user)
  projects: Project[];
}
