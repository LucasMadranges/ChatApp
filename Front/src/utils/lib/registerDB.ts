import client from "@/../apolloClient";
import {REGISTER_USER} from "@/utils/queries/registerUser";

export async function registerDB(lastname: string, firstname: string, email: string, password: string, confirmPassword: string) {
    try {
        const {data} = await client.mutate({
            mutation: REGISTER_USER,
            variables: {lastname, firstname, email, password, confirmPassword},
        });

        return {
            firstname: data.registerUser.firstname,
            lastname: data.registerUser.lastname,
            email: data.registerUser.email,
            role: data.registerUser.role,
        };
    } catch (error: any) {
        const errorMessage = error.message.replace("Error: ApolloError: ", "");
        return {
            error: errorMessage,
        };
    }
}