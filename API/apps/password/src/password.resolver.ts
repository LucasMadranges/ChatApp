import {Args, Int, Mutation, Query, Resolver} from "@nestjs/graphql";
import {PasswordService} from "./password.service";
import {Password} from "./entities/password.entity";
import {CreatePasswordInput} from "./dto/create-password.input";
import {UpdatePasswordInput} from "./dto/update-password.input";

@Resolver(() => Password)
export class PasswordResolver {
    constructor(private readonly passwordService: PasswordService) {
    }

    @Mutation(() => Password)
    createPassword(@Args("createPasswordInput") createPasswordInput: CreatePasswordInput) {
        return this.passwordService.create(createPasswordInput);
    }

    @Query(() => [Password], {name: "password"})
    findAll() {
        return this.passwordService.findAll();
    }

    @Query(() => Password, {name: "password"})
    findOne(@Args("id", {type: () => Int}) id: number) {
        return this.passwordService.findOne(id);
    }

    @Mutation(() => Password)
    updatePassword(@Args("updatePasswordInput") updatePasswordInput: UpdatePasswordInput) {
        return this.passwordService.update(updatePasswordInput.id, updatePasswordInput);
    }

    @Mutation(() => Password)
    removePassword(@Args("id", {type: () => Int}) id: number) {
        return this.passwordService.remove(id);
    }
}
