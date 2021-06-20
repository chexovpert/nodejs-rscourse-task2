import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm"
//import { v4 as uuid } from 'uuid';
@Entity({name: 'Column'})
export class Columns extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string | undefined;
    @Column('varchar')
    title: string = "base column";
    @Column('int')
    order: number = 0;
}

