import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {

    // Model<Cat> just a DAO, because its straight from table/document
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto); // this is domain:entity

        // // repo returns entity. but should have returned a DTO instead of exposing entity?
        return await createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.find().exec();
    }
}
