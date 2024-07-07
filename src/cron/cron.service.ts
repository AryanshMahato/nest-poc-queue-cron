import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { TaskService } from '../task/task.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  constructor(@InjectQueue('task') private taskQueue: Queue) {}

  @Cron('*/2 * * * * *')
  async handleCron() {
    this.logger.debug('Called every 2 seconds');
    await this.taskQueue.add('execute', {});
    // await this.taskService.execute();
  }
}
