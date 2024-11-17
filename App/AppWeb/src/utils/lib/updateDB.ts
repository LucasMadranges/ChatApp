import client from "@/../apolloClient";
import {Error} from "@/utils/models/Error";
import {UPDATE_USER} from "@/utils/queries/updateUser";

export async function updateDB(id: number, lastname: string, firstname: string, description: string, imgProfile: string): Promise<Object | Error> {
    try {
        const {data} = await client.mutate({
            mutation: UPDATE_USER,
            variables: {id, lastname, firstname, description, imgProfile},
        });

        return {
            ok: true,
            user: data,
        };
    } catch (error: any) {
        const errorMessage = error.message.replace("Error: ApolloError: ", "");
        return {
            message: errorMessage,
        };
    }
}
