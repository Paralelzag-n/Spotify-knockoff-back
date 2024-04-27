import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  user_id: string;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @Column()
  color: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user: User) => user.playlists)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
