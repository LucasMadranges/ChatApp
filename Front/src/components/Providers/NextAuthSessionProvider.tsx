"use client";
import {SessionProvider} from "next-auth/react";
import React from "react";

interface Props {
    children?: React.ReactNode,
}

export default function NextAuthSessionProvider({children}: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}