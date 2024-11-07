import {Module} from "@nestjs/common";
import {AuthResolver} from "./auth.resolver";
import {PasswordService} from "../../password/src/password.service";
import {UserService} from "../../user/src/user.service";
import {AuthService} from "./auth.service";
import {PrismaService} from "../../../prisma/prisma.service";

@Module({
    providers: [
        AuthResolver, AuthService,
        PrismaService,
        PasswordService,
        UserService,
    ],
})
export class AuthModule {
}
