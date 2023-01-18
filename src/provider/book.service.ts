import {Body, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entity/book.entity';
import {Repository} from 'typeorm';

export interface BookInterface{
    name:string,
    author:string,
    published:boolean
}

@Injectable()
export class BookService{
    constructor(
        @InjectRepository(Book)
        private bookRepository :Repository <BookInterface>,
    ){}

    create (book: BookInterface): Promise<BookInterface>{
        return this.bookRepository.save(
            this.bookRepository.create(book)
        );
    }

    findAll(): Promise<BookInterface[]>{
        return this.bookRepository.find()
    }

    update(id :string, data:any) :Promise<any>{
        return this.bookRepository
        .createQueryBuilder()
        .update()
        .set({
            name:data.name,
            author:data.author
        })
        .where('id=:id',{id})
        .execute()
    }

    delete(id:string):Promise<any>{
        return this.bookRepository
        .createQueryBuilder()
        .delete()
        .from(Book)
        .where('id=:id', {id})
        .execute()
    }
}