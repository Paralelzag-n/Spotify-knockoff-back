import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { UserEntity } from '../users/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  signUp(@Body() createUserDto: SignUpDto): Promise<UserEntity> {
    return this.authService.signUp(createUserDto);
  }
}
