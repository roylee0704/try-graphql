import { ObjectType, Field, Int } from 'type-graphql';
// why not interface?

// decorate this DTO to return gq-son (instead of J-SON)
@ObjectType()
export class CreateCatDto {
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  readonly breed: string;
}
