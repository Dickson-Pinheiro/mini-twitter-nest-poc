import { PrismaService } from "src/module/prisma/prisma.service";
import { CreatePostDto } from "../../dto/create-post.dto";
import { UpdatePostDto } from "../../dto/update-post.dto";
import { PostsRepository } from "../posts.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaPostsRepository implements PostsRepository {
    constructor(
        private prismaService: PrismaService
    ) {}

    async create({content}: CreatePostDto, user_id: number){
        return this.prismaService.posts.create({
            data: {
                content,
                user_id
            }
        })
    }
    async update({content}: UpdatePostDto, id: number){
        return this.prismaService.posts.update({
            where: {
                id
            },
            data: {
                content
            }
        })
    }

    async getAll(){
        return this.prismaService.posts.findMany({})
    }

    async getOne(id: number){
        return this.prismaService.posts.findUnique({
            where: {
                id
            }
        })
    }
}