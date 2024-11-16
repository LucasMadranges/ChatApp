import {Module} from "@nestjs/common";
import {GatewayController} from "./gateway.controller";
import {GatewayService} from "./gateway.service";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloGatewayDriver, ApolloGatewayDriverConfig} from "@nestjs/apollo";
import {IntrospectAndCompose} from "@apollo/gateway";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
            driver: ApolloGatewayDriver,
            server: {
                csrfPrevention: true,
                debug: process.env.NODE_ENV === "dev",
                nodeEnv: process.env.NODE_ENV,
            },
            gateway: {
                supergraphSdl: new IntrospectAndCompose({
                    subgraphs: [
                        {name: "user", url: `http://user-chatapp:${process.env.PORT_USER}/graphql`},
                        {name: "auth", url: `http://auth-chatapp:${process.env.PORT_AUTH}/graphql`},
                    ],
                    pollIntervalInMs: 1000,
                }),
            },
        }),
    ],
    controllers: [GatewayController],
    providers: [GatewayService],
})
export class GatewayModule {
}
