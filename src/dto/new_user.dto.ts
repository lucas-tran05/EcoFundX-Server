import { IsDefined, IsEmail, Matches } from 'class-validator';

export class NewUserDTO {
  @IsDefined()
  @Matches(/^[a-zA-Z0-9_]+$/, { message: "Invalid username format, username must contains only alphabet characters, digits and underscore character" })
  username: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  password: string;

  @IsDefined()
  password_confirmation: string;

  @IsDefined()
  @Matches(/^\d+$/)
  phone_number: string;
}
