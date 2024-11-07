import {NestFactory} from "@nestjs/core";
import {GatewayModule} from "./gateway.module";

async function bootstrap() {
    const app = await NestFactory.create(GatewayModule);

    app.enableCors({
        origin: process.env.NEXTJS_URL,
        credentials: true,
    });

    await app.listen(process.env.PORT_GATEWAY);
}

bootstrap();
