import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.getTaskById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.createUser(createUserDto);
  }
}
