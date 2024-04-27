import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AlbumEntity } from '../albums/album.entity';

@Entity('songs', { schema: 'public' })
export class SongEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'album_id' })
  album_id: string;

  @Column()
  name: string;

  @Column()
  duration: string;

  @Column()
  audio: string;

  @ManyToOne(() => AlbumEntity, (album: AlbumEntity) => album.songs)
  @JoinColumn({ name: 'album_id' })
  album: AlbumEntity;
}
