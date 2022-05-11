import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { pokemon } from './pokemon.entity';
import { PokemonService } from './pokemon.service';

@Crud({
  model: {
    type: pokemon,
  },
  query: {
    join: {
      categories: {
        eager: true,
      },
    },
  },
})
@Controller('pokemon')
export class PokemonController implements CrudController<pokemon> {
  constructor(public service: PokemonService) {}
}
