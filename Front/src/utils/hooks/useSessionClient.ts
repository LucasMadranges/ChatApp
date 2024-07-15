"use client";
import {useSession} from "next-auth/react";

export function useSessionClient({required}: { required: boolean }) {
    const {data: session, status} = useSession({
        required: required,
    });

    return {
        session,
        status,
    };
}