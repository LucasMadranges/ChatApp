"use client";
import React from "react";
import {SessionProvider} from "next-auth/react";

interface Props {
    children?: React.ReactNode,
}

export default function SessionClientProvider({children}: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
} 