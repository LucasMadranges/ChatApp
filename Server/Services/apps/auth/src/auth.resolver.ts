import {Args, Directive, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User} from "../../user/src/entities/user.entity";
import {AuthService} from "./auth.service";
import {Role} from "@prisma/client";
import {Auth} from "./entities/auth.entity";

@Resolver(() => User)
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
    ) {
    }

    // Utilisé par docker pour gérer la health du container
    @Query(() => String)
    @Directive("@shareable")
    healthCheck() {
        return "ok";
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
        @Args("role", {type: () => String, defaultValue: "USER"}) role: Role,
    ): Promise<User> {
        return this.authService.registerUser(lastname, firstname, email, password, confirmPassword, role);
    }
}
