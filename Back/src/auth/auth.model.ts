import {Field, ObjectType} from "@nestjs/graphql";
import {User} from "../user/user.model";

@ObjectType()
export class Auth {
    @Field()
    user: User;

    @Field()
    token: string;
}
