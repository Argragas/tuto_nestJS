import { Entity, Column, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { TypePokemon } from '../type/typePokemon.entity';

@Entity()
// tslint:disable-next-line: class-name
export class pokemon {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  // tslint:disable-next-line: variable-name
  name: string;

  @ManyToMany(() => TypePokemon, { cascade: true, eager: true })
  @JoinTable({
    name: 'pokemon_category',
    joinColumn: { name: 'pokemonId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'typePokemonId', referencedColumnName: 'id' },
  })
  categories: TypePokemon[];
}
