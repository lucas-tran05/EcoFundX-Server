import { Test, TestingModule } from '@nestjs/testing';
import { AllocationsController } from './allocations.controller';

describe('AllocationsController', () => {
  let controller: AllocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllocationsController],
    }).compile();

    controller = module.get<AllocationsController>(AllocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
