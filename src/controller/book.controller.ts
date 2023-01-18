import { Body,Controller, Delete, Get, Req, Post, Put, Param } from '@nestjs/common'
import { Request } from 'express'
import {BookInterface, BookService} from 'src/provider/book.service';

interface CreateBookDto{
    name:string,
    author:string,
    published:boolean
}

@Controller('books')
export class BookController{
    constructor (private bookservices: BookService){}
    @Post()
        async create (@Body() createBookDto:CreateBookDto) {
            const book = await this.bookservices.create(createBookDto);
            if(!book){
                return 'error adding book'
            } 
            return 'book created'
            
        }

    @Get()
    async findAll (@Req() request: Request){
        const books :Array<BookInterface> = await this.bookservices.findAll()
        return books
    }

    @Put(':id')
    async update (@Param('id') id:string, @Body() body: any){
        const newBook: any = await this.bookservices.update(id, body)
        return 'book uodated'
    }

    @Delete(':id')
    async remove(@Param('id') id :string){
        await this.bookservices.delete(id)
        return 'book removed'
    }
    }
