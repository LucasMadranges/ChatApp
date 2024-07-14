import {Args, Query, Resolver} from "@nestjs/graphql";
import {PrismaService} from "../../prisma/prisma.service";
import {User} from "../user/user.model";
import {PasswordService} from "../password/password.service";
import {UserService} from "../user/user.service";
import {AuthService} from "./auth.service";

@Resolver(() => User)
export class AuthResolver {
    constructor(
        private readonly prisma: PrismaService,
        private readonly passwordService: PasswordService,
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {
    }

    @Query(() => User)
    async loginUser(
        @Args("email") email: string,
        @Args("password") password: string,
    ): Promise<User> {
        return this.authService.loginUser(email, password);
    }
}
