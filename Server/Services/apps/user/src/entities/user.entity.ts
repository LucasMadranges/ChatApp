import {Directive, Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    @Directive("@shareable")
    id: number;

    @Field()
    @Directive("@shareable")
    firstname: string;

    @Field()
    @Directive("@shareable")
    lastname: string;

    @Field()
    @Directive("@shareable")
    description: string;

    @Field()
    @Directive("@shareable")
    email: string;

    @Field()
    @Directive("@shareable")
    password: string;

    @Field()
    @Directive("@shareable")
    role?: string;

    @Field()
    @Directive("@shareable")
    imgProfile: string;
}
