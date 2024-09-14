"use client";
import {useState} from "react";

export default function ProfileForm({session}: any) {
    const [lastname, setLastname] = useState(session.user.lastname);
    const [firstname, setFirstname] = useState(session.user.firstname);
    const [email, setEmail] = useState(session.user.email);
    const [description, setDescription] = useState(session.user.description);

    return (
        <form className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col md:flex-row gap-6 w-full">
                <input type="text"
                       placeholder="Nom"
                       value={lastname}
                       onChange={(e) => setLastname(e.target.value)}
                       className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
                <input type="text"
                       placeholder="Prénom"
                       value={firstname}
                       onChange={(e) => setFirstname(e.target.value)}
                       className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
            </div>
            <input type="text"
                   placeholder="Email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
            <textarea placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="placeholder:text-gray-400 rounded-xl bg-gray-200 px-4 py-3 w-full"
                      rows={8}/>
            <button className="bg-green-600 w-fit px-4 py-2 rounded-full transition hover:bg-green-700 active:scale-95">Sauvegarder</button>
        </form>
    );
}