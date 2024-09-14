import MenuBar from "@/components/MenuBar/MenuBar";
import React from "react";
import {useSession} from "@/utils/hooks/useSession";
import {redirect} from "next/navigation";

export default async function AppLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const result = await useSession();

    if (result.ok) {
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