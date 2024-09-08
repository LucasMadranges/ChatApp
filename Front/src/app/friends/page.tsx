import UsersList from "@/components/UserList/UsersList";
import {useSession} from "@/utils/hooks/useSession";
import {redirect} from "next/navigation";

export default async function Page() {
    const result = await useSession();

    if (result.ok) {
        return (
            <>
                <UsersList/>
            </>
        );
    } else {
        redirect("/auth/signin");
    }
}