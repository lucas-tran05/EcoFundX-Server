import { Module } from '@nestjs/common';
import { AllocationsController } from './allocations.controller';
import { AllocationsService } from './allocations.service';

@Module({
  controllers: [AllocationsController],
  providers: [AllocationsService],
})
export class AllocationsModule {}
