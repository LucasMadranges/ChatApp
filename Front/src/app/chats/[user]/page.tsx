"use client";
import Chat from "@/components/Chat/Chat";
import {useSession} from "next-auth/react";

export default function Page({params}: { params: any }) {
    const {data: session} = useSession({
        required: true,
    });
    console.log(params);

    return (
        <>
            <Chat/>
        </>
    );
}