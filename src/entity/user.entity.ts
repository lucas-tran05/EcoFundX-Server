import { Column, Entity, OneToMany } from 'typeorm';
import { ApplicationParanoia } from './application_paranoia';
import { IsEmail, Length } from 'class-validator';
import { Investment } from './invesment.entity';
import { PostForum } from './post.entity';
import { PostComment } from './post_comment.entity';
import { Project } from './project.entity';
import { Comment } from './comment.entity';
import { UserRole } from 'src/common/enums/user-role.enum';

@Entity()
export class User extends ApplicationParanoia {
  @Column({ unique: true })
  @Length(6, 32)
  username: string;
  @Column({
    type: 'enum', // Khai báo là kiểu enum
    enum: UserRole, // Liên kết enum đã định nghĩa
    default: UserRole.USER, // Giá trị mặc định
  })
  role: UserRole;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ unique: true })
  phone_number: string;

  @Column({ select: false })
  hashed_password: string;

  @OneToMany(() => Investment, investment => investment.user)
  investments: Investment[];

  // @OneToMany(() => Transaction, transaction => transaction.user)
  // transactions: Transaction[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(() => PostForum, post => post.user)
  posts: PostForum[];

  @OneToMany(() => PostComment, postComment => postComment.user)
  postComments: PostComment[];

  @OneToMany(() => Project, project => project.user)
  projects: Project[];
}
