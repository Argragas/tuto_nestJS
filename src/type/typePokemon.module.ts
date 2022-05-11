import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypePokemonController } from './typePokemon.controller';
import { TypePokemon } from './typePokemon.entity';
import { TypePokemonService } from './typePokemon.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypePokemon])],
  controllers: [TypePokemonController],
  providers: [TypePokemonService],
  exports: [TypePokemonService],
})
export class TypePokemonModule {}
