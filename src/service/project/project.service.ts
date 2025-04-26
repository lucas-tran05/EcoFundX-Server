import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entity/project.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  findAll() {
    return this.projectRepository.find();
  }
  findOne(id: number) {
    return this.projectRepository.findOne({
      where: { id },
      relations: {
        // lấy thông tin người tạo dự án
        user: true,
        // lấy comment của dự án và người comment đó
        comments: {
          user: true,
        },
        rewards: true,
        allocations: true,
      },
    });
  }
  create(product: Partial<Project>) {
    return this.projectRepository.save(product);
  }

  update(id: number, product: Partial<Project>) {
    return this.projectRepository.update(id, product);
  }

  remove(id: number) {
    return this.projectRepository.delete(id);
  }

  findProjectFeature() {
    return this.projectRepository
      .createQueryBuilder('project')
      .leftJoin('project.investments', 'investment')
      .addSelect('COUNT(DISTINCT investment.userId)', 'investorCount') // đếm số người đầu tư
      .groupBy('project.id')
      .orderBy('investorCount', 'DESC') // sắp xếp theo số lượng người đầu tư giảm dần
      .limit(5) // lấy top 5
      .getRawAndEntities()
      .then(({ entities }) => entities);
  }
}
