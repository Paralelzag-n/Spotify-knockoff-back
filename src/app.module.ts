import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { PlaylistsModule } from './modules/playlists/playlists.module';
import { SongsModule } from './modules/songs/songs.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { checkAuth } from './common/middleware/auth.middleware';
import { UsersController } from './modules/users/users.controller';
import { SongsController } from './modules/songs/songs.controller';
import { PlaylistsController } from './modules/playlists/playlists.controller';
import { AlbumsController } from './modules/albums/albums.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'spotify-knockon',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AlbumsModule,
    PlaylistsModule,
    SongsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(checkAuth)
      .forRoutes(
        UsersController,
        SongsController,
        PlaylistsController,
        AlbumsController,
      );
  }
}
