import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Project } from './project.entity';
import { Investment } from './invesment.entity';
import { ApplicationParanoia } from './application_paranoia';

@Entity()
export class Reward extends ApplicationParanoia {
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
