import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumController } from 'src/controller/forum/forum.controller';
import { PostForum } from 'src/entity/post.entity';
import { ForumService } from 'src/service/forum/forum.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostForum])],
  controllers: [ForumController],
  providers: [ForumService],
})
export class ForumModule {}
