import client from "@/../apolloClient";
import {FETCH_USERS} from "@/utils/queries/fetchUsers";

export async function fetchUsersDB() {
    try {
        const {data} = await client.query({
            query: FETCH_USERS,
        });

        return data;
    } catch (error: any) {
        const errorMessage = error.message.replace("Error: ApolloError: ", "");
        return {
            error: errorMessage,
        };
    }
}