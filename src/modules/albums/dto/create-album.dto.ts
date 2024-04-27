import { IsNotEmpty } from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  thumbnail: string;

  @IsNotEmpty()
  color: string;
}
