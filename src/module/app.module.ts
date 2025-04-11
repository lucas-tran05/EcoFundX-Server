import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from '../controller/app.controller';
// import { AppService } from '../service/app.service';
import { UsersModule } from './users/users.module';
import { UpdatesModule } from './updates/updates.module';
import { TransactionsModule } from './transactions/transactions.module';
import { RewardsModule } from './rewards/rewards.module';
import { ProjectsModule } from './projects/projects.module';
import { InvestmentsModule } from './investments/investments.module';
import { ForumModule } from './forum/forum.module';
import { CommentsModule } from './comments/comments.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { AllocationsModule } from './allocations/allocations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Transaction } from './transactions/entities/transaction.entity';
import { Reward } from './rewards/entities/reward.entity';
import { Project } from './projects/entities/project.entity';
import { Investment } from './investments/entities/investment.entity';
import { Post } from './forum/entities/post.entity';
import { PostComment } from './forum/entities/post-comment.entity';
import { Comment } from './comments/entities/comment.entity';
import { Category } from './categories/entities/category.entity';
import { Allocation } from './allocations/entities/allocation.entity';
import { ProjectUpdate } from './updates/entities/update.entity';

@Module({
  imports: [
    UsersModule,
    UpdatesModule,
    TransactionsModule,
    RewardsModule,
    ProjectsModule,
    InvestmentsModule,
    ForumModule,
    CommentsModule,
    CategoriesModule,
    AuthModule,
    AllocationsModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // hoặc postgres, sqlite...
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'dauphuthanhkim00',
      database: 'eco',
      entities: [
        User,
        Transaction,
        Reward,
        Project,
        Investment,
        Post,
        PostComment,
        Comment,
        Category,
        Allocation,
        ProjectUpdate,
      ],
      synchronize: true,
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
