import client from "@/../apolloClient";
import {REGISTER_USER} from "@/utils/queries/registerUser";
import {Error} from "@/utils/models/Error";

export async function registerDB(lastname: string, firstname: string, email: string, password: string, confirmPassword: string): Promise<boolean | Error> {
    try {
        const {data} = await client.mutate({
            mutation: REGISTER_USER,
            variables: {lastname, firstname, email, password, confirmPassword},
        });

        return true;
    } catch (error: any) {
        const errorMessage = error.message.replace("Error: ApolloError: ", "");
        return {
            message: errorMessage,
        };
    }
}
