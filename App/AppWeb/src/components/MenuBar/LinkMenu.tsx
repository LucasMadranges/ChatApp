"use client";

import Link from "next/link";
import {PeoplesIcon} from "@/components/Icons/PeoplesIcon";
import {usePathname} from "next/navigation";
import {SearchIcon} from "@/components/Icons/SearchIcon";
import {BellIcon} from "@/components/Icons/BellIcon";
import {MessageIcon} from "@/components/Icons/MessageIcon";

export default function LinkMenu() {
    const pathname = usePathname();

    const arrLink = [
        {
            path: "/chats",
            text: "Messages",
            icon: <MessageIcon width="32px"
                               height="32px"
                               color="white"/>,
        },
        {
            path: "/friends",
            text: "Amis",
            icon: <PeoplesIcon width="32px"
                               height="32px"
                               color="white"/>,
        },
        {
            path: "/search",
            text: "Recherche",
            icon: <SearchIcon width="32px"
                              height="32px"
                              color="white"/>,
        },
        {
            path: "/notifications",
            text: "Notifications",
            icon: <BellIcon width="32px"
                            height="32px"
                            color="white"/>,
        },
    ];

    return (
        <div className="flex flex-col gap-2">
            {arrLink.map((link, index) => (
                <Link key={index}
                      href={link.path}
                      className={`flex items-center justify-center lg:justify-start gap-2 py-2 hover:bg-gray-800 -mx-2 px-2 transition ${link.path === pathname ? "bg-gray-600" : ""}`}>
                    {link.icon}
                    <span className="text-white text-sm hidden lg:inline-block">{link.text}</span>
                </Link>
            ))}
        </div>
    );
}