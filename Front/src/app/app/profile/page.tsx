import Image from "next/image";
import ProfilPicture from "@/../../public/people/people-1.jpg";
import {useSession} from "@/utils/hooks/useSession";
import ProfileForm from "@/components/Form/ProfileForm/ProfileForm";

export default async function Page() {
    const session: any = await useSession();


    return (
        <>
            <section className="lg:p-32 md:p-16 p-8 border-b border-gray-200 flex flex-col items-center justify-start gap-12 w-full overflow-auto">
                <Image src={ProfilPicture}
                       alt="Photo de profil"
                       width={2048}
                       height={2048}
                       className="rounded-full h-32 w-32 object-cover"/>
                <ProfileForm session={session}/>
            </section>
        </>
    );
}