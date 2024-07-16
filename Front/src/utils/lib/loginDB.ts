import client from "@/../apolloClient";
import {LOGIN_USER} from "../queries/loginUser";

export async function LoginDB(email: string, password: string, confirmPassword: string) {
    try {
        const {data} = await client.query({
            query: LOGIN_USER,
            variables: {email, password, confirmPassword},
        });

        return {
            firstname: data.loginUser.firstname,
            lastname: data.loginUser.lastname,
            email: data.loginUser.email,
        };
    } catch (error: any) {
        const errorMessage = error.message.replace("Error: ApolloError: ", "");
        throw new Error(errorMessage);
    }
}
