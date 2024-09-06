import {User} from "@/utils/models/User";

export interface Auth {
    user: User,
    token: string
}