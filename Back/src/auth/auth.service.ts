// user.service.ts
import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../prisma/prisma.service";
import {Role, User} from "@prisma/client";
import {PasswordService} from "../password/password.service";
import {UserService} from "../user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private userService: UserService,
        private passwordService: PasswordService,
    ) {
    }

    async loginUser(email: string, password: string): Promise<User> {
        const user = await this.userService.getUserByEmail(email);

        if (!user) {
            throw new Error("L'email est incorrect");
        } else {
            const isCorrectPassword = await this.passwordService.comparePasswords(password, user.password);

            if (!isCorrectPassword) {
                throw new Error("Le mot de passe est incorrect");
            } else {
                return user;
            }
        }
    }

    async registerUser(lastname: string, firstname: string, email: string, password: string, role: Role = "USER"): Promise<User> {
        return this.userService.createUser(lastname, firstname, email, password, role);
    }
}
