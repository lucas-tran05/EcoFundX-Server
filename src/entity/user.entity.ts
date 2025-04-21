import { Column, Entity } from 'typeorm';
import { ApplicationParanoia } from './application_paranoia';
import { IsEmail, Length } from 'class-validator';

@Entity()
export class User extends ApplicationParanoia {
  @Column({ unique: true })
  @Length(6, 32)
  username: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ unique: true })
  phone_number: string;

  @Column({ select: false })
  hashed_password: string;
}
