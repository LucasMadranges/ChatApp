"use client";
import MenuBar from "@/components/MenuBar/MenuBar";
import React from "react";

export default function UsersLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <MenuBar/>
            {children}
        </>
    );
}