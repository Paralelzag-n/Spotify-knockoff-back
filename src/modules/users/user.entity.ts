import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Generated('uuid')
  firebase_id: string;

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
}
