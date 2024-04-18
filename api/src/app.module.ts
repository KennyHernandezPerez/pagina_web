import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuegosController } from './juegos/juegos.controller';
import { HttpModule } from '@nestjs/axios';
import { AnimeController } from './anime/anime.controller';
import { AnimeService } from './anime/anime.service';
import { MangaController } from './manga/manga.controller';
import { MangaService } from './manga/manga.service';
import { PeliculasController } from './peliculas/peliculas.controller';
import { PeliculasService } from './peliculas/peliculas.service';
import { JuegosService } from './juegos/juegos.service';
import { TriviaController } from './trivia/trivia.controller';
import { TriviaService } from './trivia/trivia.service';
import { UsuariosModule } from './Usuarios/users.module';
import { UsuariosListasController } from './Listas/listas.controller';
import { UsuariosListasService } from './Listas/listas.service';
import { GeolocationController } from './geolocacion/geolocation.controller';
import { GeolocationService } from './geolocacion/geolocation.service';
import { CorreoController } from './correo/correo.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bxig34l3iac7etoa6jpj-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uykk4a5uurkqqepp',
      password: 'nizETOT4472QJgaudKhW',
      database: 'bxig34l3iac7etoa6jpj',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }), UsuariosModule, HttpModule],
  controllers: [JuegosController, AnimeController, MangaController, PeliculasController, TriviaController, UsuariosListasController, GeolocationController, CorreoController],
  providers: [AnimeService, MangaService, PeliculasService, JuegosService, TriviaService, UsuariosListasService, GeolocationService],
}) //convertir en modulos
export class AppModule { }
