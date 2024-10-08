"use client";
import {useEffect, useState} from "react";
import {fetchUsersDB} from "@/utils/lib/fetchUsers";
import FriendsCard from "@/components/FriendsList/FriendsCard";

export default function FriendsList() {
    const objUser = {
        id: 7657986588965,
        firstName: "Prénom",
        lastName: "Nom",
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        const data = fetchUsersDB();
        console.log(data);
    }, []);

    const arrUser = Array.from({length: 25}, () => objUser);

    return (
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full lg:gap-12 gap-6 lg:p-12 p-6 overflow-auto">
            {arrUser.map((user, index) => {
                return (
                    <FriendsCard key={index}
                                 user={user}/>
                );
            })}
        </section>
    );
}