import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { PostsModule } from './module/posts/posts.module';

@Module({
  imports: [UsersModule, AuthModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
