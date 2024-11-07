import {Module} from "@nestjs/common";
import {AuthResolver} from "./auth.resolver";
import {PasswordService} from "../../password/src/password.service";
import {UserService} from "../../user/src/user.service";
import {AuthService} from "./auth.service";
import {PrismaService} from "../../../prisma/prisma.service";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloFederationDriver, ApolloFederationDriverConfig} from "@nestjs/apollo";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: {
                federation: 2,
            },
        }),
    ],
    providers: [
        AuthResolver, AuthService,
        PrismaService,
        PasswordService,
        UserService,
    ],
})
export class AuthModule {
}
