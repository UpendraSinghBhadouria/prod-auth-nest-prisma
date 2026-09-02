import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { TaskService } from './task.service.js';
import { CurrentUser } from '../common/decorators/current-user.decorator.js';
import type { User } from '../generated/prisma/client.js';
import { CreateTaskDto } from './dto/create-task.dto.js';

@ApiTags('Tasks')
@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TaskService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks for current user' })
  findAll(@CurrentUser() user: User) {
    return this.tasksService.findAllForUser(user.id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  create(@CurrentUser() user: User, @Body() dto: CreateTaskDto) {
    return this.tasksService.create(user.id, dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task' })
  update(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Body() dto: Partial<CreateTaskDto>,
  ) {
    return this.tasksService.update(id, user.id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  remove(@CurrentUser() user: User, @Param('id') id: string) {
    return this.tasksService.delete(id, user.id);
  }
}
