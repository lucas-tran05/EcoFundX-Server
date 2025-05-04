import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostForum } from 'src/entity/post.entity';
import { ForumService } from 'src/service/forum/forum.service';

@Controller('api/forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @Post()
  create(@Body() post: Partial<PostForum>) {
    return this.forumService.create(post);
  }

  @Get()
  findAll() {
    return this.forumService.findAll();
  }

  @Get('post/:id')
  findOne(@Param('id') id: string) {
    return this.forumService.findOne(+id);
  }

  @Put('post/:id')
  update(@Param('id') id: string, @Body() post: Partial<PostForum>) {
    return this.forumService.update(+id, post);
  }

  @Delete('post/:id')
  remove(@Param('id') id: string) {
    return this.forumService.remove(+id);
  }
}
