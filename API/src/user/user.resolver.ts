import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User} from "./user.model";
import {Role} from "@prisma/client";
import {UserService} from "./user.service";

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) {
    }

    // Query Function
    @Query(() => [User])
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Query(() => User, {nullable: true})
    async getUserByEmail(
        @Args("email") email: string,
    ): Promise<User | null> {
        return this.userService.getUserByEmail(email);
    }

    @Query(() => User, {nullable: true})
    async getUserById(
        @Args("id") id: number,
    ): Promise<User | null> {
        return this.userService.getUserById(id);
    }

    // Mutation Function
    @Mutation(() => User)
    async createUser(
        @Args("lastname") lastname: string,
        @Args("firstname") firstname: string,
        @Args("description") description: string,
        @Args("email") email: string,
        @Args("password") password: string,
        @Args("role", {defaultValue: "USER"}) role: Role,
    ): Promise<User> {
        return this.userService.createUser(lastname, firstname, description, email, password, role);
    }

    @Mutation(() => User)
    async updateUser(
        @Args("id") id: number,
        @Args("lastname") lastname: string,
        @Args("firstname") firstname: string,
        @Args("description") description: string,
        @Args("email") email: string,
        @Args("password") password: string,
        @Args("role", {defaultValue: "USER"}) role: Role,
    ): Promise<User> {
        return this.userService.updateUser(id, lastname, firstname, description, email, password, role);
    }

    @Mutation(() => Boolean)
    async deleteUser(
        @Args("id") id: number,
    ): Promise<boolean> {
        return this.userService.deleteUser(id);
    }
}
