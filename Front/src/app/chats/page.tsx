"use client";
import ListChats from "@/components/ListChats/ListChats";
import {useSession} from "next-auth/react";

export default function Page() {
    const {data: session} = useSession({
        required: true,
    });

    return (
        <>
            <ListChats/>
        </>
    );
}