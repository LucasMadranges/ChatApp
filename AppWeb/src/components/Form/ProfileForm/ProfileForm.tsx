"use client";
import {useRef, useState} from "react";
import Image from "next/image";
import {AddCircleIcon} from "@/components/Icons/AddCircleIcon";
import {WarningIcon} from "@/components/Icons/WarningIcon";

export default function ProfileForm({session}: any) {
    const [lastname, setLastname] = useState(session.user.lastname);
    const [firstname, setFirstname] = useState(session.user.firstname);
    const [email, setEmail] = useState(session.user.email);
    const [description, setDescription] = useState(session.user.description);
    const [imgProfile, setImgProfile] = useState(session.user.imgProfile);
    const refFile: any = useRef(0);

    return (
        <form className="w-full flex flex-col items-center justify-start gap-12">
            <input type="file"
                   ref={refFile}
                   hidden/>
            <div className="group relative hover:cursor-pointer"
                 onClick={() => {
                     refFile.current.click();
                 }}>
                <div className="group-hover:blur-sm transition">
                    <Image src={imgProfile}
                           alt="Photo de profil"
                           width={256}
                           height={256}
                           className="rounded-full h-24 w-24 object-cover"/>
                </div>
                <AddCircleIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition z-10 h-12 w-12"/>
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
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
                <div className="flex items-center justify-start gap-1 w-full">
                    <WarningIcon className="[&_path]:fill-amber-600"/>
                    <span className="text-sm text-amber-600">Des modifications ne sont pas enregistrées</span>
                </div>
                <button className="bg-green-600 w-fit px-4 py-2 rounded-full transition hover:bg-green-700 active:scale-95">Sauvegarder</button>
            </div>
        </form>
    );
}