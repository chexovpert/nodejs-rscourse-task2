import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'
//import {v4 as uuid} from "uuid"


@Entity({name: 'User'})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', {length: 35, nullable: true})
  name: string = 'USER';

  @Column('varchar', {length: 35, nullable: true})
  login: string = 'user';

  @Column('varchar', {length: 35, select: false, nullable: true})
  password: string | undefined;



}

