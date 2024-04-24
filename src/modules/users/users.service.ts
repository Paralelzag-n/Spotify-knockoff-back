import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getTaskById(id: string): Promise<User> {
    const found = await this.usersRepository.findOneBy({ id: id });

    if (!found) {
      throw new NotFoundException(`user with ID ${id} not found`);
    }

    return found;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, is_artist, email, color, avatar, description } =
      createUserDto;

    const user: User = this.usersRepository.create({
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
