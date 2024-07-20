import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: ["http://nextjs-app:3000", "http://localhost:3000"], // Updated to include localhost:3000
        credentials: true,
    });

    await app.listen(4000);
}

bootstrap().catch((err) => console.log(err));