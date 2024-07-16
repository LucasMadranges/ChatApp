"use client";
import UsersList from "@/components/UserList/UsersList";
import {useSession} from "next-auth/react";

export default function Page() {
    const {data: session} = useSession({
        required: true,
    });

    return (
        <UsersList/>
    );
}