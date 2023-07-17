import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaPostsRepository } from './repository/implementations/prismaPosts.repository';

@Injectable()
export class PostsService {
  constructor(
    private postsRepository: PrismaPostsRepository
  ){}
  async create(createPostDto: CreatePostDto, user_id: number) {
    return await this.postsRepository.create(createPostDto, user_id)
  }

  async findAll() {
    return await this.postsRepository.getAll();
  }

  async update(id: number, updatePostDto: UpdatePostDto, user) {
    const post = await this.postsRepository.getOne(id)
    if(!post) throw new NotFoundException()
    if(post.user_id !== user.id) throw new ConflictException()
    return this.postsRepository.update(updatePostDto, id);
  }
}
