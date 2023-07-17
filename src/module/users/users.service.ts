import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaUsersRepository } from './repository/implementations/prismaUsers.repository';
import* as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(private usersRepository: PrismaUsersRepository){}

  async create({name, email, password}: CreateUserDto) {
    const userWithEmail = await this.usersRepository.findUserByEmail(email)
    if(userWithEmail){
      throw new ConflictException({message: 'User already exists'})
    }

    const hashPassword = bcrypt.hashSync(password, 10)
    return await this.usersRepository.addUser({name, email, password: hashPassword})
  }

  async findAll() {
    return await this.usersRepository.findAllUsers();
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findUserById(id);
    if(!user) throw new NotFoundException()
    return {name: user.name, email: user.email, id: user.id, createdAt: user.createdAt, updatedAt: user.updatedAt}
  }
}
