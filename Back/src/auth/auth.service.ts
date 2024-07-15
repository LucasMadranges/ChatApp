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
            throw new Error("L'email ou le mot de passe sont incorrect");
        } else {
            const isCorrectPassword = await this.passwordService.comparePasswords(password, user.password);

            if (!isCorrectPassword) {
                throw new Error("L'email ou le mot de passe sont incorrect");
            } else {
                return user;
            }
        }
    }

    async registerUser(lastname: string, firstname: string, email: string, password: string, role: Role = "USER"): Promise<User> {
        const newEmail = email.toLowerCase();
        const user = await this.userService.getUserByEmail(newEmail);

        if (!user) {
            const newLastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
            const newFirstname = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();

            return this.userService.createUser(newLastname, newFirstname, newEmail, password, role);
        } else {
            throw new Error("L'email existe déjà");
        }

    }
}
