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

    async loginUser(email: string, password: string, confirmPassword: string): Promise<User> {
        if (!email || !password || !confirmPassword) {
            throw new Error("Les champs email, mot de passe et confirmation de mot de passe sont requis");
        } else {
            const validateEmail = email.toLowerCase().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
            const lowerEmail = email.toLowerCase();
            const user = await this.userService.getUserByEmail(lowerEmail);

            if (!validateEmail) {
                throw new Error("La valeur saisie dans le champ 'email' n'est pas un email");
            } else {
                if (!user) {
                    throw new Error("L'email ou le mot de passe est incorrect");
                } else {
                    if (password !== confirmPassword) {
                        throw new Error("Les mots de passe ne correspondent pas");
                    } else {
                        const isCorrectPassword = await this.passwordService.comparePasswords(password, user.password);

                        if (!isCorrectPassword) {
                            throw new Error("L'email ou le mot de passe est incorrect");
                        } else {
                            return user;
                        }
                    }
                }
            }
        }
    }

    async registerUser(lastname: string, firstname: string, email: string, password: string, confirmPassword: string, role: Role = "USER"): Promise<User> {
        if (!lastname || !firstname || !email || !password || !confirmPassword) {
            throw new Error("Les champs nom, prénom, email, mot de passe et confirmation de mot de passe sont requis");
        } else {
            const newEmail = email.toLowerCase();
            const newLastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
            const newFirstname = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();

            const user = await this.userService.getUserByEmail(newEmail);

            if (!user) {
                const validatePassword = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,})/);

                if (!validatePassword) {
                    throw new Error("Le mot de passe ne correspond pas. Il doit contenir au minimum : 12 caractères, 1 lettre minuscule, 1 lettre majuscule, 1 chiffre et 1 symbole");
                } else {
                    if (password !== confirmPassword) {
                        throw new Error("Les mots de passe ne correspondent pas");
                    } else {
                        return this.userService.createUser(newLastname, newFirstname, newEmail, password, role);
                    }
                }
            } else {
                throw new Error("Cette email est déjà utilisé");
            }
        }
    }
}
