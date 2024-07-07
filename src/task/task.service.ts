import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  execute(sleepTime = 5000): Promise<void> {
    return new Promise((resolve) => {
      this.logger.log('Running task');
      setTimeout(() => {
        this.logger.log('Task Completed');
        resolve();
      }, sleepTime);
    });
  }
}
