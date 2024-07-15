import MenuBar from "@/components/MenuBar/MenuBar";
import React from "react";
import SessionProviderClient from "@/components/Providers/SessionProviderClient";

export default function UsersLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <SessionProviderClient>
                <MenuBar/>
                {children}
            </SessionProviderClient>
        </>
    );
}