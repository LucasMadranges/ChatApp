import {Module} from "@nestjs/common";
import {AuthResolver} from "./auth.resolver";
import {PasswordService} from "../password/password.service";
import {UserService} from "../user/user.service";
import {AuthService} from "./auth.service";

@Module({
    providers: [
        AuthResolver, AuthService,
        PasswordService,
        UserService,
    ],
})
export class AuthModule {
}
