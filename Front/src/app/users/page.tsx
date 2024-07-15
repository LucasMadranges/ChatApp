"use client";
import UsersList from "@/components/UserList/UsersList";
import {useSessionClient} from "@/utils/hooks/useSessionClient";

export default function Page() {
    const {session, status} = useSessionClient({
        required: true,
    });

    return (
        <UsersList/>
    );
}