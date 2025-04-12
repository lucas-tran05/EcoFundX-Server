import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Category } from '../../categories/entities/category.entity';
import { Investment } from '../../investments/entities/investment.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { ProjectUpdate } from '../../updates/entities/update.entity';
import { Reward } from '../../rewards/entities/reward.entity';
import { Allocation } from '../../allocations/entities/allocation.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column()
  title: string;

  @Column()
  image_product: string;

  @Column()
  description: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  goat_amount: number;

  @Column()
  raised_amount: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => User, user => user.projects)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, category => category.projects)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Reward, reward => reward.project)
  rewards: Reward[];

  @OneToMany(() => Investment, investment => investment.project)
  investments: Investment[];

  @OneToMany(() => Comment, comment => comment.project)
  comments: Comment[];

  @OneToMany(() => ProjectUpdate, update => update.project)
  updates: ProjectUpdate[];

  @OneToMany(() => Allocation, allocation => allocation.project)
  allocations: Allocation[];
}
