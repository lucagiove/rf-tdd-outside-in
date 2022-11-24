import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaRepo } from './prisma.repo';

@Injectable()
export class SessionService {
  constructor(repo: PrismaRepo) {}

  create(createSessionDto: CreateSessionDto) {
    return 'This action adds a new session';
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
