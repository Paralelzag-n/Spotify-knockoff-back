import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  is_artist: boolean;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  avatar: string;

  @IsNotEmpty()
  description: string;
}
