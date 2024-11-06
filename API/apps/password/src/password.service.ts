import {Injectable} from "@nestjs/common";
import {CreatePasswordInput} from "./dto/create-password.input";
import {UpdatePasswordInput} from "./dto/update-password.input";

@Injectable()
export class PasswordService {
    create(createPasswordInput: CreatePasswordInput) {
        return "This action adds a new password";
    }

    findAll() {
        return `This action returns all password`;
    }

    findOne(id: number) {
        return `This action returns a #${id} password`;
    }

    update(id: number, updatePasswordInput: UpdatePasswordInput) {
        return `This action updates a #${id} password`;
    }

    remove(id: number) {
        return `This action removes a #${id} password`;
    }
}
