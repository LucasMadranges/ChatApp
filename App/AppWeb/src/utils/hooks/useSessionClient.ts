import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {convertToken} from "@/utils/lib/convertToken";

export function useSessionClient() {
    const [sessionToken, setSessionToken] = useState<string | null>(null);

    useEffect(() => {
        // Lire le cookie 'token'
        const token = Cookies.get("token");
        setSessionToken(token || null);
    }, []);

    if (sessionToken) {
        return convertToken(sessionToken);
    }
}