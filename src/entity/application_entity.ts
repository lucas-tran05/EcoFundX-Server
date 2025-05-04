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

  @CreateDateColumn({
    type: 'datetime', // hoặc 'timestamp' nếu chắc DB hỗ trợ
    // default: () => 'CURRENT_TIMESTAMP', // START giá trị
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime', // hoặc 'timestamp'

    // onUpdate: 'CURRENT_TIMESTAMP', // tự động cập nhật
  })
  updatedAt: Date;
}
