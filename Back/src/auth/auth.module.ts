import {Module} from "@nestjs/common";
import {AuthResolver} from "./auth.resolver";
import {PasswordService} from "../password/password.service";
import {UserService} from "../user/user.service";

@Module({
    providers: [
        AuthResolver,
        PasswordService,
        UserService,
    ],
})
export class AuthModule {
}
