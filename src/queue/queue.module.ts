import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { TaskModule } from '../task/task.module';

@Module({
  imports: [TaskModule],
  providers: [QueueService],
})
export class QueueModule {}
