import {Args, Int, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Group} from "./group.model";
import {PrismaService} from "../../prisma/prisma.service";

@Resolver(() => Group)
export class GroupResolver {
    constructor(private readonly prisma: PrismaService) {
    }

    @Query(() => [Group])
    async getGroup(): Promise<Group[]> {
        return this.prisma.group.findMany({
            include: {
                userList: true, // Include the userList in the result
            },
        });
    }

    @Query(() => Group)
    async getGroupById(
        @Args("id") id: number,
    ): Promise<Group> {
        return this.prisma.group.findUnique({
            where: {
                id,
            },
            include: {
                userList: true,
            },
        });
    }

    @Mutation(() => Group)
    async createGroup(
        @Args("name") name: string,
        @Args({name: "userList", type: () => [Int]}) userList: number[],
    ): Promise<Group> {
        return this.prisma.group.create({
            data: {
                name,
                userList: {
                    connect: userList.map(id => ({id})),
                },
            },
            include: {
                userList: true,
            },
        });
    }
}