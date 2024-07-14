import {Injectable} from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class PasswordService {
    async hashPassword(password: string): Promise<string> {
        const saltOrRounds = 10; // Nombre de tours pour le hachage
        return bcrypt.hash(password, saltOrRounds);
    }

    async comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainTextPassword, hashedPassword);
    }
}
