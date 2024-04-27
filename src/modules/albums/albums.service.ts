import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlbumEntity } from './album.entity';
import { UserEntity } from '../users/user.entity';
import { CreateAlbumDto } from './dto/create-album.dto';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(AlbumEntity)
    private albumsRepository: Repository<AlbumEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createAlbum(createAlbumDto: CreateAlbumDto): Promise<AlbumEntity> {
    const { user_id, name, thumbnail, color } = createAlbumDto;

    const album: AlbumEntity = this.albumsRepository.create({
      user_id,
      name,
      thumbnail,
      color,
    });

    await this.albumsRepository.save(album);

    return album;
  }

  async getUserAlbums(user_id: string): Promise<AlbumEntity[]> {
    const user: UserEntity = await this.usersRepository.findOneBy({
      id: user_id,
    });

    if (!user) {
      throw new NotFoundException(`user with ID ${user_id} not found`);
    }

    return await this.albumsRepository.find({
      where: { user_id: user_id },
    });
  }
}
