import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Album } from '../albums/album.entity';

@Entity()
export class Song {
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

  @ManyToOne(() => Album, (album: Album) => album.songs)
  @JoinColumn({ name: 'album_id' })
  album: Album;
}
