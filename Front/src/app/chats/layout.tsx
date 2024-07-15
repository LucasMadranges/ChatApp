"use client";
import MenuBar from "@/components/MenuBar/MenuBar";
import React from "react";
import {SessionProvider} from "next-auth/react";

export default function UsersLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <SessionProvider>
                <MenuBar/>
                {children}
            </SessionProvider>
        </>
    );
}