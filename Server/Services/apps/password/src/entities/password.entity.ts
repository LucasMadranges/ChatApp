import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Password {
    @Field(() => Int, {description: "Example field (placeholder)"})
    exampleField: number;
}
