/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('Packages')
export class Packages extends BaseEntity {
  @Column({
    primary: true,
  })
  id_package: string;

  @Column()
  packageName: string;

  @Column('text')
  destination: string;

  @Column()
  price: number;
}
