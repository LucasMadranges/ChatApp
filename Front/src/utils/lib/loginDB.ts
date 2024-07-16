import client from "@/../apolloClient";
import {LOGIN_USER} from "../queries/loginUser";

export async function LoginDB(email: string, password: string, confirmPassword: string) {
    try {
        const {data} = await client.query({
            query: LOGIN_USER,
            variables: {email, password},
        });

        console.log("User data:", data);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
}
