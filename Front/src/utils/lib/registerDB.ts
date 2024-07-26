import client from "@/../apolloClient";
import {REGISTER_USER} from "@/utils/queries/registerUser";

export async function registerDB(lastname, firstname, email, password, confirmPassword) {
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
    } catch (error) {
        const errorMessage = error.message.replace("Error: ApolloError: ", "");
        return {
            error: errorMessage,
        };
    }
}
