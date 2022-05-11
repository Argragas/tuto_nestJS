import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { TypePokemon } from './typePokemon.entity';

@Injectable()
export class TypePokemonService extends TypeOrmCrudService<TypePokemon> {
  constructor(@InjectRepository(TypePokemon) repo) {
    super(repo);
  }
}
