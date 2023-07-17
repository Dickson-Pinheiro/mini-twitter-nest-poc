import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { PrismaUsersRepository } from '../users/repository/implementations/prismaUsers.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET
  })],
  controllers: [AuthController],
  providers: [AuthService, UsersService, PrismaUsersRepository, PrismaService]
})
export class AuthModule {}
