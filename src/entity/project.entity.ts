import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { ApplicationParanoia } from './application_paranoia';
import { User } from './user.entity';
import { Category } from './category.entity';
import { Reward } from './reward.entity';
import { Investment } from './invesment.entity';
import { ProjectUpdate } from './projectupdate.entity';
import { Allocation } from './allocation.entity';
import { Comment } from './comment.entity';

@Entity()
export class Project extends ApplicationParanoia {
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

  @ManyToOne(() => User, user => user.projects)
  user: User;

  @ManyToOne(() => Category, category => category.projects)
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
