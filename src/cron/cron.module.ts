import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskModule } from '../task/task.module';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.registerQueue({
      name: 'task',
    }),
    TaskModule,
  ],
  providers: [CronService],
})
export class CronModule {}
