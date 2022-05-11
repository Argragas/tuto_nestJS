import { Test, TestingModule } from '@nestjs/testing';
import { TypePokemonController } from './typePokemon.controller';

describe('TypeController', () => {
  let controller: TypePokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypePokemonController],
    }).compile();

    controller = module.get<TypePokemonController>(TypePokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
