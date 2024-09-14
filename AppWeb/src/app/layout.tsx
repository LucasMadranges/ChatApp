import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Chat App",
    description: "Created by Lucas Madranges",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="fr">
            <body className={`${inter.className} flex`}>
                <main className="flex overflow-hidden h-svh w-full">
                    {children}
                </main>
            </body>
        </html>
    );
}
