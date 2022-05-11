import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { pokemon } from './pokemon.entity';

@Injectable()
export class PokemonService extends TypeOrmCrudService<pokemon> {
  constructor(@InjectRepository(pokemon) repo) {
    super(repo);
  }
}
