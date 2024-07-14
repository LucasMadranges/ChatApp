import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User} from "./user.model";
import {PrismaService} from "../../prisma/prisma.service";
import {Role} from "@prisma/client";
import {PasswordService} from "../password/password.service";

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly prisma: PrismaService, private readonly passwordService: PasswordService) {
    }

    // Query Function
    @Query(() => [User])
    async getUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    @Query(() => User)
    async getUserById(
        @Args("id") id: number,
    ): Promise<User> {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    // Mutation Function
    @Mutation(() => User)
    async createUser(
        @Args("lastname") lastname: string,
        @Args("firstname") firstname: string,
        @Args("email") email: string,
        @Args("password") password: string,
        @Args("role", {defaultValue: "USER"}) role: Role,
    ): Promise<User> {
        const hashedPassword = await this.passwordService.hashPassword(password);

        return this.prisma.user.create({
            data: {
                lastname,
                firstname,
                email,
                password: hashedPassword,
                role,
            },
        });
    }

    @Mutation(() => User)
    async updateUser(
        @Args("id") id: number,
        @Args("lastname") lastname: string,
        @Args("firstname") firstname: string,
        @Args("email") email: string,
        @Args("password") password: string,
        @Args("role", {defaultValue: "USER"}) role: Role,
    ): Promise<User> {
        const hashedPassword = await this.passwordService.hashPassword(password);

        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                lastname,
                firstname,
                email,
                password: hashedPassword,
                role,
            },
        });
    }

    @Mutation(() => Boolean)
    async deleteUser(
        @Args("id") id: number,
    ): Promise<boolean> {
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
