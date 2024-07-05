import {Field, ID, ObjectType} from "@nestjs/graphql";
import {User} from "../user/user.model";

@ObjectType()
export class Group {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field(() => [User])
    userList: User[];
}
