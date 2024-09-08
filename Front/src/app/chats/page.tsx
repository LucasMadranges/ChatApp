"use client";
import ListChats from "@/components/ListChats/ListChats";
import {useSession} from "@/utils/hooks/useSession";
import {useRouter} from "next/navigation";

export default function Page() {
    const result = useSession();
    const router = useRouter();

    if (result.ok) {
        return (
            <>
                <ListChats/>
            </>
        );
    } else {
        router.push("/auth/signin");
    }
}