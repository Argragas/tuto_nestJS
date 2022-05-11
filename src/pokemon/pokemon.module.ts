import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { pokemon } from './pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { TypePokemon } from 'src/type/typePokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([pokemon, TypePokemon])],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [PokemonService],
})
export class PokemonModule {}
