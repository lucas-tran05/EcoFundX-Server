import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { User } from 'src/entity/user.entity';
import { UsersModule } from './users/users.module';
import { Project } from 'src/entity/project.entity';
import { Allocation } from 'src/entity/allocation.entity';
import { Category } from 'src/entity/category.entity';
import { Comment } from 'src/entity/comment.entity';
import { PostComment } from 'src/entity/post_comment.entity';
import { ProjectUpdate } from 'src/entity/projectupdate.entity';
import { Reward } from 'src/entity/reward.entity';
import { Investment } from 'src/entity/invesment.entity';
import { Transaction } from 'src/entity/transaction.entity';
import { ForumModule } from './forum/forum.module';
import { PostForum } from 'src/entity/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'dauphuthanhkim00',
      database: 'eco4',
      entities: [
        User,
        Project,
        Allocation,
        Category,
        Comment,
        PostForum,
        PostComment,
        ProjectUpdate,
        Reward,
        Transaction,
        Investment,
      ],
      migrations: ['src/migrations/*.ts'],
      // synchronize: process.env.NEST_ENV == 'development',
      synchronize: true,
    }),
    UsersModule,
    ForumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
