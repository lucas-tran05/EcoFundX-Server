import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Investment } from '../../investments/entities/investment.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  transaction_id: number;

  @Column()
  amount: number;

  @Column()
  payment_method: string;

  @Column()
  transaction_date: Date;

  @Column()
  status: string;

  @ManyToOne(() => Investment, investment => investment.transactions)
  @JoinColumn({ name: 'investment_id' })
  investment: Investment;

  @ManyToOne(() => User, user => user.transactions)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
