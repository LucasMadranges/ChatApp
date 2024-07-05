import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {User} from "./user.model";
import {PrismaService} from "../../prisma/prisma.service";

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly prisma: PrismaService) {
    }

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

    @Mutation(() => User)
    async createUser(
        @Args("name") name: string,
        @Args("email") email: string,
    ): Promise<User> {
        return this.prisma.user.create({
            data: {
                name,
                email,
            },
        });
    }
}
