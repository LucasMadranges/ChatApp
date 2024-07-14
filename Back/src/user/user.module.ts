import {Module} from "@nestjs/common";
import {UserResolver} from "./user.resolver";
import {PrismaService} from "../../prisma/prisma.service";
import {PasswordService} from "../password/password.service";

@Module({
    providers: [UserResolver, PrismaService, PasswordService],
})
export class UserModule {
}
