import {CreatePasswordInput} from "./create-password.input";
import {Field, InputType, Int, PartialType} from "@nestjs/graphql";

@InputType()
export class UpdatePasswordInput extends PartialType(CreatePasswordInput) {
    @Field(() => Int)
    id: number;
}
