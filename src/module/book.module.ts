import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm';
import { Book } from "src/entity/book.entity";
import { BookController } from "src/controller/book.controller";
import { BookService } from "src/provider/book.service";

@Module({
    imports:[TypeOrmModule.forFeature([Book])],
    controllers:[BookController],
    providers:[BookService]
})

export class BookModule{}