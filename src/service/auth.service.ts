import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NewUserDTO } from "src/dto/new_user.dto";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async createNewUser(user : NewUserDTO): Promise<User> {
    var newUser = new User();
    console.log(newUser);

    return await this.userRepo.save(user);
  }
}
