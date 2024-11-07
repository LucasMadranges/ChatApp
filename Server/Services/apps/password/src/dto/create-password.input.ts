import {Field, InputType, Int} from "@nestjs/graphql";

@InputType()
export class CreatePasswordInput {
    @Field(() => Int, {description: "Example field (placeholder)"})
    exampleField: number;
}
