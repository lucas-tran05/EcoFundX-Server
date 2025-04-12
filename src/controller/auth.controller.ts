import { Body, Controller, HttpException, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { NewUserDTO } from 'src/dto/new_user.dto';
import { AuthService } from 'src/service/auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  create(@Body(ValidationPipe) dto: NewUserDTO) {
    if (dto.password != dto.password_confirmation)
      throw new HttpException('Password confirmation mismatch', HttpStatus.BAD_REQUEST);

    return this.authService.createNewUser(dto);
  }
}
