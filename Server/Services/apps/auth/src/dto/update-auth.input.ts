import {CreateAuthInput} from "./create-auth.input";
import {Field, InputType, Int, PartialType} from "@nestjs/graphql";

@InputType()
export class UpdateAuthInput extends PartialType(CreateAuthInput) {
    @Field(() => Int)
    id: number;
}
