import {Module} from "@nestjs/common";
import {AuthResolver} from "./auth.resolver";
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
        UserService,
    ],
})
export class AuthModule {
}
