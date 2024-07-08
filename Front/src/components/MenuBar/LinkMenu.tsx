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
                  className={`flex items-center justify-center py-2 ${pathname.includes("/chats") ? "bg-gray-400 -mx-2" : ""}`}>
                <PeoplesIcon width="32px"
                             height="32px"/>
            </Link>
            <Link href="/users"
                  className={`flex items-center justify-center py-2 ${pathname.includes("/users") ? "bg-gray-400 -mx-2" : ""}`}>
                <AddChatIcon width="32px"
                             height="32px"/>
            </Link>
        </div>
    );
}