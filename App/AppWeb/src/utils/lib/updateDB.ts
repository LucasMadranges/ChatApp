import client from "@/../apolloClient";
import {Error} from "@/utils/models/Error";
import {UPDATE_USER} from "@/utils/queries/updateUser";

export async function updateDB(id: number, lastname: string, firstname: string, description: string, imgProfile: string): Promise<boolean | Error> {
    try {
        console.log(
            {id, lastname, firstname, description, imgProfile},
        );

        const {data} = await client.mutate({
            mutation: UPDATE_USER,
            variables: {id, lastname, firstname, description, imgProfile},
        });

        console.log(data);

        return true;
    } catch (error: any) {
        const errorMessage = error.message.replace("Error: ApolloError: ", "");
        return {
            message: errorMessage,
        };
    }
}
