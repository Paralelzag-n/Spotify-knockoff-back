import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Album } from './album.entity';

@Controller('albums')
export class AlbumsController {
  constructor(private albumsService: AlbumsService) {}

  @Post()
  createAlbum(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumsService.createAlbum(createAlbumDto);
  }

  @Get('/:id')
  getUserAlbums(@Param('id') id: string): Promise<Album[]> {
    return this.albumsService.getUserAlbums(id);
  }
}
