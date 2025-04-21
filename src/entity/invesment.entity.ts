import {
  Entity,
  //   PrimaryGeneratedColumn,
  Column,
  //   CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Project } from './project.entity';
import { User } from './user.entity';
import { Reward } from './reward.entity';
import { ApplicationParanoia } from './application_paranoia';
import { Transaction } from './transaction.entity';

@Entity()
export class Investment extends ApplicationParanoia {
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
