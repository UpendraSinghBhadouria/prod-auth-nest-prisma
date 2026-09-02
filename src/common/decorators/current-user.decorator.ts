import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import type { User } from '../../generated/prisma/client.ts';

type RequestWithUser = Request & { user: User };

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    return request.user;
  },
);
