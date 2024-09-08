"use client";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

export function useSession() {
    const router = useRouter();
    const token = Cookies.get("token");

    if (token) {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(atob(base64).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return {
            ok: true,
            user: JSON.parse(jsonPayload),
        };
    } else {
        return {
            ok: false,
        };
    }
}