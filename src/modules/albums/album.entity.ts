import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Song } from '../songs/song.entity';

@Entity()
export class Album {
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

  @ManyToOne(() => User, (user: User) => user.albums)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Song, (song: Song) => song.album)
  songs: Song[];
}
