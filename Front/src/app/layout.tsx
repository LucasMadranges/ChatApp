import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Chat App",
    description: "Created by Lucas Madranges",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fr">
            <body className={`${inter.className}`}>
                <main className="flex overflow-hidden h-svh">
                    {children}
                </main>
            </body>
        </html>
    );
}
