import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Album } from './album.entity';
import { CreateAlbumDto } from './dto/create-album.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(Album)
    private albumsRepository: Repository<Album>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createAlbum(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const { user_id, name, thumbnail, color } = createAlbumDto;

    const album: Album = this.albumsRepository.create({
      user_id,
      name,
      thumbnail,
      color,
    });

    await this.albumsRepository.save(album);

    return album;
  }

  async getUserAlbums(user_id: string): Promise<Album[]> {
    const user: User = await this.usersRepository.findOneBy({ id: user_id });

    if (!user) {
      throw new NotFoundException(`user with ID ${user_id} not found`);
    }

    return await this.albumsRepository.find({
      where: { user_id: user_id },
    });
  }
}
