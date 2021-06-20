//import { v4 as uuid } from 'uuid';
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'

@Entity({name: 'Task'})
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string| undefined ;

    @Column('varchar')
    title: string = 'base string';

    @Column('int')
    order: number=0;

    @Column('varchar')
    description: string = 'base description';

    @Column({type: 'text',
    nullable: true,})
    userId!: string | null;

    @Column('varchar', {nullable: true})
    columnId: string | null = null;

    @Column( {type: 'text', nullable: true})
    boardId!: string ;

}

