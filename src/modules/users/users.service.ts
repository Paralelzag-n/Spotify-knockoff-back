import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getTaskById(id: string): Promise<UserEntity> {
    const found = await this.usersRepository.findOneBy({ id: id });

    if (!found) {
      throw new NotFoundException(`user with ID ${id} not found`);
    }

    return found;
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { username, is_artist, email, color, avatar, description } =
      createUserDto;

    const user: UserEntity = this.usersRepository.create({
      username,
      is_artist,
      email,
      color,
      avatar,
      description,
    });

    await this.usersRepository.save(user);

    return user;
  }
}
