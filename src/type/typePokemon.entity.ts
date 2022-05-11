import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// tslint:disable-next-line: class-name
export class TypePokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
