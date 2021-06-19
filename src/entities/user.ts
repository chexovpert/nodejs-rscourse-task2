import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'
//import {v4 as uuid} from "uuid"


@Entity({name: 'User'})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', {length: 25})
  name: string = 'USER';

  @Column('varchar', {length: 25})
  login: string = 'user';

  @Column('varchar', {length: 25, select: false})
  password: string | undefined;



}

