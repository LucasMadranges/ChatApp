import {useSession} from "@/utils/hooks/useSession";
import {redirect} from "next/navigation";
import ListChats from "@/components/ListChats/ListChats";

export default async function Page() {
    const result = await useSession();

    if (result.ok) {
        return (
            <>
                <ListChats/>
            </>
        );
    } else {
        redirect("/auth/signin");
    }
}