import {Args, Query, Resolver} from "@nestjs/graphql";
import {PrismaService} from "../../prisma/prisma.service";
import {User} from "../user/user.model";
import {PasswordService} from "../password/password.service";
import {UserService} from "../user/user.service";

@Resolver(() => User)
export class AuthResolver {
    constructor(
        private readonly prisma: PrismaService,
        private readonly passwordService: PasswordService,
        private readonly userService: UserService,
    ) {
    }

    @Query(() => User)
    async loginUser(
        @Args("email") email: string,
        @Args("password") password: string,
    ): Promise<User> {
        const user = await this.userService.getUserByEmail(email);

        if (!user) {
            throw new Error("L'email est incorrect");
        } else {
            const isCorrectPassword = await this.passwordService.comparePasswords(password, user.password);

            if (!isCorrectPassword) {
                throw new Error("Le mot de passe est incorrect");
            } else {
                return user;
            }
        }
    }
}
