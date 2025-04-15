import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

/**
 * Abstract class for base entity
 * @field id Default id of model
 * @field created_at Timestamp for storing when the record created
 * @field updated_at Same as created_at but update to current time if record updated
 */
@Entity()
export abstract class ApplicationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz', default: 'now()' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: 'now()',
    onUpdate: 'now()',
  })
  updatedAt: Date;
}
