import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { UserEntity } from '../users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { comparePassword, hashPassword } from '../../helpers/auth';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<UserEntity> {
    const { username, email, password, repeatPassword } = signUpDto;

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

  async signIn(signInDto: SignInDto): Promise<{ access_token: string }> {
    const { email, password } = signInDto;

    const user: UserEntity = await this.usersRepository.findOneBy({
      email: email,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordIsValid: boolean = await comparePassword(
      password,
      user.password,
    );

    if (!passwordIsValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
