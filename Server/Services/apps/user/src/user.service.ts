import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../../prisma/prisma.service";
import {Role, User} from "@prisma/client";
import {PasswordService} from "../../password/src/password.service";
import {generateRandomNumber} from "../../../utils/lib/generateRandomNumber";
import * as process from "node:process";

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private passwordService: PasswordService,
    ) {
    }

    async getUsers(): Promise<User[] | null> {
        return this.prisma.user.findMany();
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }

    async getUserById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    async createUser(lastname: string, firstname: string, email: string, password: string, role: Role | "USER"): Promise<User | null> {
        const hashedPassword = await this.passwordService.hashPassword(password);
        const index = generateRandomNumber(1, 10);
        const defaultImgProfile = `${process.env.AWS_LINK}/default-avatar/default-avatar-${index}.svg`;

        return this.prisma.user.create({
            data: {
                lastname,
                firstname,
                email,
                password: hashedPassword,
                role,
                imgProfile: defaultImgProfile,
            },
        });
    }

    async updateUser(id: number, lastname: string, firstname: string, description: string, imgProfile: string): Promise<User | null> {
        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                lastname,
                firstname,
                description,
                imgProfile,
            },
        });
    }

    async deleteUser(id: number): Promise<boolean> {
        try {
            await this.prisma.user.delete({
                where: {
                    id,
                },
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
