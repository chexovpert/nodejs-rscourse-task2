//import { v4 as uuid } from 'uuid';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
//import {Column as Columns} from '../types/types';

@Entity({name: 'Board'})
class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;
  @Column('varchar')
  title: string = "base title";
  @Column({ type: "json", nullable: true })
  columns?: string;
  
}

export {Board};
