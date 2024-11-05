import client from "@/../apolloClient";
import {LOGIN_USER} from "../queries/loginUser";
import {Error} from "@/utils/models/Error";
import {Auth} from "@/utils/models/Auth";

export async function LoginDB(email: string, password: string, confirmPassword: string): Promise<Auth | Error> {
    try {
        const {data} = await client.query({
            query: LOGIN_USER,
            variables: {email, password, confirmPassword},
        });

        return {
            user: data.loginUser.user,
            token: data.loginUser.token,
        };
    } catch (error: any) {
        const errorMessage = error.message.replace("Error: ApolloError: ", "");
        return {
            message: errorMessage,
        };
    }
}
