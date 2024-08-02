import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import * as process from "node:process";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: process.env.NEXTJS_URL,
        credentials: true,
    });

    await app.listen(4000);
}

bootstrap().catch((err) => console.log(err));