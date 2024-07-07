import { Processor, WorkerHost } from '@nestjs/bullmq';
import { TaskService } from '../task/task.service';
import { Logger } from '@nestjs/common';

@Processor('task')
export class QueueService extends WorkerHost {
  private readonly logger = new Logger(QueueService.name);

  constructor(private taskService: TaskService) {
    super();
  }

  async process() {
    this.logger.log('Running task in queue');
    await this.taskService.execute();
    this.logger.log('Queue completed');
  }
}
