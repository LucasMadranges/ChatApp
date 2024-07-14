"use client";

import Link from "next/link";
import {PeoplesIcon} from "@/components/Icons/PeoplesIcon";
import {AddChatIcon} from "@/components/Icons/AddChatIcon";
import {usePathname} from "next/navigation";

export default function LinkMenu() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col gap-2">
            <Link href="/chats"
                  className={`flex items-center justify-center lg:justify-start gap-2 py-2 hover:lg:bg-gray-800 -mx-2 px-2 transition ${pathname.includes("/chats") ? "bg-gray-600" : ""}`}>
                <PeoplesIcon width="32px"
                             height="32px"
                             color="white"/>
                <span className="text-white text-sm hidden lg:inline-block">Messages</span>
            </Link>
            <Link href="/users"
                  className={`flex items-center justify-center lg:justify-start gap-2 py-2 hover:lg:bg-gray-800 -mx-2 px-2 transition ${pathname.includes("/users") ? "bg-gray-600" : ""}`}>
                <AddChatIcon width="32px"
                             height="32px"
                             color="white"/>
                <span className="text-white text-sm hidden lg:inline-block">Liste des utilisateurs</span>
            </Link>
        </div>
    );
}