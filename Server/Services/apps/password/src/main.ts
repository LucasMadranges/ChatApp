import {NestFactory} from "@nestjs/core";
import {PasswordModule} from "./password.module";

async function bootstrap() {
    const app = await NestFactory.create(PasswordModule);
    await app.listen(process.env.PORT_PASSWORD);
}

bootstrap();
