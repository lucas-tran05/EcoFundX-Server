import { Column, Entity } from 'typeorm';
import { ApplicationEntity } from './application_entity';

/**
 * Abstract entity same as ApplicationEntity but for soft-delete
 * @field deleted_at Storing the time that record deleted -> not really destroyed just set the time
 */
@Entity()
export abstract class ApplicationParanoia extends ApplicationEntity {
  // @Column({ type: 'timestamptz', default: null })
  @Column({ default: null })
  deletedAt: Date;
}
