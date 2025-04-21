import { Entity, Column, ManyToOne } from 'typeorm';
// import { User } from '../../users/entities/user.entity';
// import { Investment } from '../../investments/entities/investment.entity';
import { ApplicationParanoia } from './application_paranoia';
import { Investment } from './invesment.entity';

@Entity()
export class Transaction extends ApplicationParanoia {
  @Column()
  amount: number;

  @Column()
  payment_method: string;

  @Column()
  transaction_date: Date;

  @Column()
  status: string;

  @ManyToOne(() => Investment, (investment) => investment.transactions)
  investment: Investment;
}
