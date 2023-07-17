import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaPostsRepository } from './repository/implementations/prismaPosts.repository';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { PrismaUsersRepository } from '../users/repository/implementations/prismaUsers.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET
  })],
  controllers: [PostsController],
  providers: [PostsService, PrismaService, PrismaPostsRepository, AuthService, PrismaUsersRepository, UsersService]
})
export class PostsModule {}
