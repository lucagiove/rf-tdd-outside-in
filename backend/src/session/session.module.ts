import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { PrismaRepo } from './prisma.repo';

@Module({
  controllers: [SessionController],
  providers: [SessionService, PrismaRepo],
})
export class SessionModule {}
