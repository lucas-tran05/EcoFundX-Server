import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Project } from './project.entity';
import { Investment } from './invesment.entity';

@Entity()
export class Reward {
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
