import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaUsersRepository } from './repository/implementations/prismaUsers.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, PrismaUsersRepository]
})
export class UsersModule {}
