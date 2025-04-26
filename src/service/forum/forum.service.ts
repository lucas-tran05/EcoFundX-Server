import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostForum } from 'src/entity/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ForumService {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    @InjectRepository(PostForum)
    private postrepo: Repository<PostForum>,
  ) {}

  create(post: Partial<PostForum>) {
    return this.postrepo.save(post);
  }

  findAll() {
    return this.postrepo.find();
  }

  findOne(id: number) {
    return this.postrepo.findOne({
      where: { id },
      relations: {
        comments: {
          user: true,
        },
      },
    });
  }

  update(id: number, post: Partial<PostForum>) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.postrepo.update(id, post);
  }

  remove(id: number) {
    return this.postrepo.delete(id);
  }
}
