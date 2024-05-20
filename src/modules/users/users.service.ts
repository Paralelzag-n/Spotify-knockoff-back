import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async getUserById(id: string): Promise<UserEntity> {
    const found = await this.usersRepository.findOneBy({ id: id });

    if (!found) {
      throw new NotFoundException(`user with ID ${id} not found`);
    }

    return found;
  }
}
