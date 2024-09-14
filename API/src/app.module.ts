import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {PrismaModule} from "../prisma/prisma.module";
import {UserModule} from "./user/user.module";
import {AuthModule} from "./auth/auth.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        PrismaModule,
        UserModule,
        AuthModule,
    ],
})
export class AppModule {
}
