import { BadRequestException, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { UserEntity } from '../users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from '../../helpers/auth';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async signUp(createUserDto: SignUpDto): Promise<UserEntity> {
    const { username, email, password, repeatPassword } = createUserDto;

    if (password !== repeatPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    const user: UserEntity = this.usersRepository.create({
      username,
      email,
      password: await hashPassword(password),
    });

    await this.usersRepository.save(user);

    return user;
  }
}
