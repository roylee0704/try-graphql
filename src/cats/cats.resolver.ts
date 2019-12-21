import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatInput } from './dto/create-cat.input';
import { ProductInput } from './dto/create-product.input';
import { CreateProductDto } from './dto/create-product.dto';

// resolver is basically your http-controller in REST.

// code first
@Resolver(of => CreateCatDto)
export class CatResolver {
    constructor(
        private readonly catsService: CatsService,
    ) { }

    @Query(() => String)
    async hello() {
        return 'world';
    }

    @Query(() => [CreateCatDto])
    async cats() {
        return this.catsService.findAll();
    }

    @Mutation(() => CreateCatDto)
    async createCat(@Args('input') input: CatInput) {

        console.log(input, 'sjdjsdjjsds');
        const a = await this.catsService.create(input);

        console.log('asasasa', a);
        return a;
    }

    @Mutation(() => CreateProductDto)
    async createProduct(@Args('input') input: ProductInput) {

        console.log(input.options, 'sjdjsdjjsds');

        return {
            title: 'hello',
            description: 'worldddd',
        };
    }

    // r0cwEIUWSUgKTAFV
}
