import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'ecofund_development',
      entities: [],
      synchronize: process.env.NODE_ENV == "development",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
