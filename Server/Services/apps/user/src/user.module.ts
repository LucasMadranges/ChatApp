import {Module} from "@nestjs/common";
import {UserResolver} from "./user.resolver";
import {PrismaService} from "../../../prisma/prisma.service";
import {PasswordService} from "../../password/src/password.service";
import {UserService} from "./user.service";
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
        UserResolver, UserService,
        PrismaService,
        PasswordService,
    ],
})
export class UserModule {
}
