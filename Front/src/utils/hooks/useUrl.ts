"use server";
import {headers} from "next/headers";

export default async function UseUrl() {
    const headersList = headers();
    const fullUrl = headersList.get("referer") || "";
    return fullUrl.replace(`${process.env.NEXTAUTH_URL}`, "");
}