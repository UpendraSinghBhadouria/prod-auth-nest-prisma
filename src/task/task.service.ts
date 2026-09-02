import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllForUser(userId: string) {
    return this.prisma.task.findMany({
      where: {
        userId,
      },
    });
  }

  async create(userId: string, dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  async update(id: string, userId: string, data: Partial<CreateTaskDto>) {
    const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    if (task.userId !== userId) {
      throw new ForbiddenException('You do not own this task');
    }

    return this.prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string, userId: string) {
    const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    if (task.userId !== userId) {
      throw new ForbiddenException('You do not own this task');
    }

    await this.prisma.task.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Task deleted successfully',
    };
  }
}
