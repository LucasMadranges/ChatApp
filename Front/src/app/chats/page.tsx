"use client";
import ListChats from "@/components/ListChats/ListChats";
import {useSessionClient} from "@/utils/hooks/useSessionClient";

export default function Page() {
    const {session, status} = useSessionClient({
        required: true,
    });

    return (
        <>
            <ListChats/>
        </>
    );
}