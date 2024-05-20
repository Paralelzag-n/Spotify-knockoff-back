import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): Promise<UserEntity[]> {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.getUserById(id);
  }
}
