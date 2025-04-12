import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
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
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @OneToMany(() => Investment, investment => investment.reward)
  investments: Investment[];
}
