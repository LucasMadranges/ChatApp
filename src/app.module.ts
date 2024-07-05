import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {PrismaModule} from "../prisma/prisma.module";
import {UserModule} from "./user/user.module";
import {GroupModule} from "./group/group.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        PrismaModule,
        UserModule,
        GroupModule,
    ],
})
export class AppModule {
}
