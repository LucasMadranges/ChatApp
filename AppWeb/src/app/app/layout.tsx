import MenuBar from "@/components/MenuBar/MenuBar";
import React from "react";
import {redirect} from "next/navigation";
import {useSession} from "@/utils/hooks/useSession";

export default async function AppLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const session = await useSession();

    if (session.ok) {
        return (
            <>
                <MenuBar/>
                {children}
            </>
        );
    } else {
        redirect("/auth/signin");
    }
}