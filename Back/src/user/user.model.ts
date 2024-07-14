import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    id: number;

    @Field()
    firstname: string;

    @Field()
    lastname: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    role?: string;
}
