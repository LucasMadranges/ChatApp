"use server";
import {cookies} from "next/headers";
import {convertToken} from "@/utils/lib/convertToken";

export async function useSession() {
    const token = cookies().get("token")?.value;

    if (token) {
        return {
            ok: true,
            user: convertToken(token),
        };
    } else {
        return {
            ok: false,
        };
    }
}