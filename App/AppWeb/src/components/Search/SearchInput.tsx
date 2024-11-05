"use client";
import {useState} from "react";

export default function SearchInput() {
    const [search, setSearch] = useState("");

    return (
        <input type="text"
               placeholder="Rechercher un utilisateur..."
               className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
    );
}