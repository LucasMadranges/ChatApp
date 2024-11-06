import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User} from "../user/user.model";
import {AuthService} from "./auth.service";
import {Role} from "@prisma/client";
import {Auth} from "./auth.model";

@Resolver(() => User)
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
    ) {
    }

    @Query(() => Auth)
    async loginUser(
        @Args("email") email: string,
        @Args("password") password: string,
        @Args("confirmPassword") confirmPassword: string,
    ): Promise<Auth> {
        return this.authService.loginUser(email, password, confirmPassword);
    }

    @Mutation(() => User)
    async registerUser(
        @Args("lastname") lastname: string,
        @Args("firstname") firstname: string,
        @Args("email") email: string,
        @Args("password") password: string,
        @Args("confirmPassword") confirmPassword: string,
        @Args("role", {defaultValue: "USER"}) role: Role,
    ): Promise<User> {
        return this.authService.registerUser(lastname, firstname, email, password, confirmPassword, role);
    }
}
