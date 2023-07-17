import { users } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';

export abstract class UsersRepository {
  abstract addUser(data: CreateUserDto): Promise<Omit<users, 'password'>>;
  abstract findAllUsers(): Promise<Omit<users, 'password'>[]>;
  abstract findUserByEmail(email: string): Promise<users>;
  abstract findUserById(id: number): Promise<users>;
}