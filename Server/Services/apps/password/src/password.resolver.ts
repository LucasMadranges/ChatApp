import {Directive, Query, Resolver} from "@nestjs/graphql";

@Resolver(() => String)
export class PasswordResolver {
    constructor() {
    }

    // Utilisé par docker pour gérer la health du container
    @Query(() => String)
    @Directive("@shareable")
    healthCheck() {
        return "ok";
    }
}
