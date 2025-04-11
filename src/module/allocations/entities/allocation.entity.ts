import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Project } from '../../projects/entities/project.entity';

@Entity()
export class Allocation {
  @PrimaryGeneratedColumn()
  allocation_id: number;

  @Column()
  title: string;

  @Column()
  allocation: number;

  @ManyToOne(() => Project, project => project.allocations)
  project: Project;
}
