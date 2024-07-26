import client from "@/../apolloClient";
import {LOGIN_USER} from "../queries/loginUser";

export async function LoginDB(email: string, password: string, confirmPassword: string) {
    try {
        const {data} = await client.query({
            query: LOGIN_USER,
            variables: {email, password, confirmPassword},
        });

        console.log(data);

        return {
            firstname: data.loginUser.firstname,
            lastname: data.loginUser.lastname,
            email: data.loginUser.email,
            role: data.loginUser.role,
        };
    } catch (error: any) {
        const errorMessage = error.message.replace("Error: ApolloError: ", "");
        throw new Error(errorMessage);
    }
}
