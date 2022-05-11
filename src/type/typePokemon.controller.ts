import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { TypePokemon } from './typePokemon.entity';
import { TypePokemonService } from './typePokemon.service';

@Crud({
  model: {
    type: TypePokemon,
  },
})
@Controller('type')
export class TypePokemonController implements CrudController<TypePokemon> {
  constructor(public service: TypePokemonService) {}
}
