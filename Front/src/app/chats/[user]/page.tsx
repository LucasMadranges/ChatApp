"use client";
import Chat from "@/components/Chat/Chat";
import {useSessionClient} from "@/utils/hooks/useSessionClient";

export default function Page({params}: { params: any }) {
    const {session, status} = useSessionClient({
        required: true,
    });
    console.log(params);

    return (
        <>
            <Chat/>
        </>
    );
}