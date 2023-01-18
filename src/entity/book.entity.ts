import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('Book')
export class Book{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @Column()
    author:string

    @Column({default:false})
    published:boolean;

}