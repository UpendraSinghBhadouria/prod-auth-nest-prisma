import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module.js';
import { AdminController } from './admin.controller.js';

@Module({
  imports: [UserModule],
  controllers: [AdminController],
})
export class AdminModule {}
