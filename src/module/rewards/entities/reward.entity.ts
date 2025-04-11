import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Project } from '../../projects/entities/project.entity';
import { Investment } from '../../investments/entities/investment.entity';

@Entity()
export class Reward {
  @PrimaryGeneratedColumn()
  reward_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  minimum_amount: number;

  @ManyToOne(() => Project, project => project.rewards)
  project: Project;

  @OneToMany(() => Investment, investment => investment.reward)
  investments: Investment[];
}
