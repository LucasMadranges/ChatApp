import {Module} from "@nestjs/common";
import {UserResolver} from "./user.resolver";
import {PrismaService} from "../../../prisma/prisma.service";
import {PasswordService} from "../../password/src/password.service";
import {UserService} from "./user.service";

@Module({
    providers: [
        UserResolver, UserService,
        PrismaService,
        PasswordService,
    ],
})
export class UserModule {
}
