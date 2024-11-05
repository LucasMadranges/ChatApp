"use server";
import {cookies} from "next/headers";

export async function setToken(data: any) {
    cookies().set("token", data, {maxAge: 86400});
}