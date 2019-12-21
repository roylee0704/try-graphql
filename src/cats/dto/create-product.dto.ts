import { ObjectType, Field, Int } from 'type-graphql';
// why not interface?

// decorate this DTO to return gq-son (instead of J-SON)
@ObjectType()
export class CreateProductDto {
    @Field()
    readonly title: string;
    @Field()
    readonly description: string;
}
