import { Module } from '@nestjs/common';
import { TasksController } from './task.controller.js';
import { TaskService } from './task.service.js';

@Module({
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}