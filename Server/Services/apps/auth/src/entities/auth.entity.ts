import {Field, ObjectType} from "@nestjs/graphql";
import {User} from "../../../user/src/entities/user.entity";

@ObjectType()
export class Auth {
    @Field()
    user: User;

    @Field()
    token: string;
}
