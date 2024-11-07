import {Module} from "@nestjs/common";
import {PasswordService} from "./password.service";
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
        PasswordService,
    ],
})
export class PasswordModule {
}
