import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostForum } from 'src/entity/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(PostForum)
    private postrepo: Repository<PostForum>,
  ) {}

  create(product: Partial<PostForum>) {
    return this.postrepo.save(product);
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

  update(id: number, product: Partial<PostForum>) {
    return this.postrepo.update(id, product);
  }

  remove(id: number) {
    return this.postrepo.delete(id);
  }
}
