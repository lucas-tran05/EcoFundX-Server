import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Project } from '../../projects/entities/project.entity'; // Ensure the file exists at this path or adjust the path accordingly

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Project, project => project.category)
  projects: Project[];
}
