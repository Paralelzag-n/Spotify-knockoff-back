import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../users/user.entity';

@Entity('playlists', { schema: 'public' })
export class PlaylistEntity {
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

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.playlists)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
