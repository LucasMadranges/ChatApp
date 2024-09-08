import {useSession} from "@/utils/hooks/useSession";
import {redirect} from "next/navigation";

export default async function Page() {
    const result = await useSession();

    if (result.ok) {
        return (
            <>
                <h1>Recherche d&apos;utilisateurs</h1>
            </>
        );
    } else {
        redirect("/auth/signin");
    }
}