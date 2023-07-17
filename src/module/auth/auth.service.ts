import { Injectable, ConflictException, BadRequestException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { UsersService } from '../users/users.service';
import { PrismaUsersRepository } from '../users/repository/implementations/prismaUsers.repository';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private usersRepository: PrismaUsersRepository,
    private JWTservice: JwtService
    ){}

  async signup(createAuthDto: CreateAuthDto) {
    return await this.usersService.create(createAuthDto)
  }

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.usersRepository.findUserByEmail(authLoginDto.email)
    if(!user) throw new ConflictException()

    const validPassword = bcrypt.compareSync(authLoginDto.password, user.password)
    if(!validPassword) throw new ConflictException()

    const token = this.createToken(user)

    return {token}
  }
  createToken(user: any){
    return this.JWTservice.sign({id: user.id}, { expiresIn: '3h'})
  }

  checkToken(token: string) {
    try {
      const data = this.JWTservice.verify(token);
      return data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
