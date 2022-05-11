import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypePokemon } from './type/typePokemon.entity';
import { pokemon } from './pokemon/pokemon.entity';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypePokemonModule } from './type/typePokemon.module';

@Module({
  imports: [
    PokemonModule,
    TypePokemonModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8042,
      username: 'poi',
      password: 'pwd_fabnum_postgres!',
      database: 'pokemon',
      synchronize: true,
      logging: true,
      entities: [TypePokemon, pokemon],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
