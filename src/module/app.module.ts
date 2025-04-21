import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { User } from 'src/entity/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [User],
      migrations: ['src/migrations/*.ts'],
      synchronize: process.env.NEST_ENV == 'development',
      // synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
