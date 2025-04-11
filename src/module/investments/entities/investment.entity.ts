import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
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
  project: Project;

  @ManyToOne(() => User, user => user.investments)
  user: User;

  @ManyToOne(() => Reward, reward => reward.investments)
  reward: Reward;

  @OneToMany(() => Transaction, transaction => transaction.investment)
  transactions: Transaction[];
}
