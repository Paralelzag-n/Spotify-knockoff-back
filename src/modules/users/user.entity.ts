import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AlbumEntity } from '../albums/album.entity';
import { PlaylistEntity } from '../playlists/playlist.entity';

@Entity('users', { schema: 'public' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  is_artist: boolean;

  @Column()
  email: string;

  @Column()
  color: string;

  @Column({ name: 'avatar', nullable: true })
  avatar: string;

  @Column()
  description: string;

  @Column()
  created_at: number;

  @Column()
  updated_at: number;

  @OneToMany(() => AlbumEntity, (album: AlbumEntity) => album.user)
  albums: AlbumEntity[];

  @OneToMany(() => PlaylistEntity, (playlist: PlaylistEntity) => playlist.user)
  playlists: PlaylistEntity[];
}
