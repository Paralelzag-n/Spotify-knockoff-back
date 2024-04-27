import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { SongEntity } from '../songs/song.entity';

@Entity('albums', { schema: 'public' })
export class AlbumEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  user_id: string;

  @Column()
  name: string;

  @Column({ default: new Date(Date.now()) })
  release_date: Date;

  @Column()
  thumbnail: string;

  @Column()
  color: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.albums)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(() => SongEntity, (song: SongEntity) => song.album)
  songs: SongEntity[];
}
