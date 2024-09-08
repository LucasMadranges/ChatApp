import MenuBar from "@/components/MenuBar/MenuBar";
import React from "react";

export default async function AppLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <MenuBar/>
            {children}
        </>
    );
}