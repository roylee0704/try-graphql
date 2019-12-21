import { Module } from '@nestjs/common';
import { CatResolver } from './cats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats.schema';
import { CatsService } from './cats.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])], // injecting Repo to Services.
    providers: [CatResolver, CatsService],
})

export class CatsModule { }
