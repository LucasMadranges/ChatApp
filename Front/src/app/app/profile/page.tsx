import Image from "next/image";
import ProfilPicture from "@/../../public/people/people-1.jpg";

export default async function Page() {
    return (
        <>
            <section className="lg:p-32 md:p-16 p-8 border-b border-gray-200 flex flex-col items-center justify-start gap-12 w-full">
                <Image src={ProfilPicture}
                       alt="Photo de profil"
                       width={2048}
                       height={2048}
                       className="rounded-full h-32 w-32 object-cover"/>
                <div className="flex flex-col items-center gap-6 w-full">
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <input type="text"
                               placeholder="Nom"
                               className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
                        <input type="text"
                               placeholder="Prénom"
                               className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
                    </div>
                    <input type="text"
                           placeholder="Email"
                           className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
                    <input type="text"
                           placeholder="Description"
                           className="placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full"/>
                    <button className="bg-green-600 w-fit px-4 py-2 rounded-full">Sauvegarder</button>
                </div>
            </section>
        </>
    );
}