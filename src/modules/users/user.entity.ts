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
  password: string;

  @Column({ default: false })
  is_artist: boolean;

  @Column()
  email: string;

  @Column({ name: 'color', default: '#FFFFFF' })
  color: string;

  @Column({ name: 'avatar', nullable: true })
  avatar: string;

  @Column({
    default: 'Help I am chajming and tesling on my head',
    nullable: true,
  })
  description: string;

  @Column('bigint', {
    name: 'created_at',
    default: Date.now(),
  })
  created_at: bigint;

  @Column('bigint', { name: 'updated_at', default: Date.now() })
  updated_at: bigint;

  @OneToMany(() => AlbumEntity, (album: AlbumEntity) => album.user)
  albums: AlbumEntity[];

  @OneToMany(() => PlaylistEntity, (playlist: PlaylistEntity) => playlist.user)
  playlists: PlaylistEntity[];
}
