import {useSession} from "@/utils/hooks/useSession";
import {redirect} from "next/navigation";
import Chat from "@/components/Chat/Chat";

export default async function Page() {
    const result = await useSession();

    if (result.ok) {
        return (
            <>
                <Chat/>
            </>
        );
    } else {
        redirect("/auth/signin");
    }
}