import { InputType, Field, Int } from 'type-graphql';
// why not interface?

// decorate this DTO to return gq-son (instead of J-SON)
@InputType()
export class CatInput {
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;
}
