"use client";
import {useState} from "react";
import {SearchIcon} from "@/components/Icons/SearchIcon";

export default function Page() {
    const [search, setSearch] = useState("");

    return (
        <>
            <section className="lg:p-12 p-6 overflow-auto w-full">
                <div className="relative">
                    <input type="text"
                           placeholder="Rechercher un utilisateur..."
                           className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
                    <SearchIcon className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 [&_path]:fill-gray-400"/>
                </div>
            </section>
        </>
    );
}