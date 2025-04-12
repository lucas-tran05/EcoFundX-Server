import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Project } from '../../projects/entities/project.entity';
import { Reward } from '../../rewards/entities/reward.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';

@Entity()
export class Investment {
  @PrimaryGeneratedColumn()
  investment_id: number;

  @CreateDateColumn()
  createAt: Date;

  @Column()
  amount: number;

  @ManyToOne(() => Project, project => project.investments)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @ManyToOne(() => User, user => user.investments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Reward, reward => reward.investments)
  @JoinColumn({ name: 'reward_id' })
  reward: Reward;

  @OneToMany(() => Transaction, transaction => transaction.investment)
  transactions: Transaction[];
}
