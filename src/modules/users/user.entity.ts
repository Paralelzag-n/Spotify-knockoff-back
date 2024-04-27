import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Album } from '../albums/album.entity';
import { Playlist } from '../playlists/playlist.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column()
  // firebase_id: string;

  @Column()
  username: string;

  @Column()
  is_artist: boolean;

  @Column()
  email: string;

  @Column()
  color: string;

  @Column()
  avatar: string;

  @Column()
  description: string;

  @OneToMany(() => Album, (album: Album) => album.user)
  albums: Album[];

  @OneToMany(() => Playlist, (playlist: Playlist) => playlist.user)
  playlists: Playlist[];
}
