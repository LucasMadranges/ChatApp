import client from "../../../apolloClient";
import {FETCH_USER} from "@/utils/queries/fetchUser";

export async function getUserById(id: number) {
    try {
        const result = await client.query({
            query: FETCH_USER,
            variables: {id},
        });

        return {
            user: result.data.getUserById,
        };
    } catch (error: any) {
        throw new Error(error);
    }
}