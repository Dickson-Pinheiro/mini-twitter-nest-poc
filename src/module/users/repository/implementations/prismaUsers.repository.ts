import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../../dto/create-user.dto";
import { UsersRepository } from "../users.repository";
import { PrismaService } from "src/module/prisma/prisma.service";

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
    constructor(private prisma: PrismaService) {}
    async addUser({name,email, password}: CreateUserDto) {
        return this.prisma.users.create({
            data: {
                name,
                email,
                password
            },
            select: {
                name: true,
                email: true,
                id: true,
                createdAt: true,
                updatedAt: true,
            }
        })
    }
    async findAllUsers() {
       return this.prisma.users.findMany({
        select: {
            name: true,
            email: true,
            id: true,
            createdAt: true,
            updatedAt: true,
        }
       })
    }
    async findUserByEmail(email: string){
        return this.prisma.users.findUnique({
            where: {
                email
            }
        })
    }
    async findUserById(id: number) {
        return this.prisma.users.findUnique({
            where: {
                id
            }
        })
    }
    
}