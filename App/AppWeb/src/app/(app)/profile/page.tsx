import {useSession} from "@/utils/hooks/useSession";
import ProfileForm from "@/components/Form/ProfileForm/ProfileForm";

export default async function Page() {
    const session: any = await useSession();

    return (
        <>
            <section className="lg:p-32 md:p-16 p-8 border-b border-gray-200 w-full overflow-auto">
                <ProfileForm session={session}/>
            </section>
        </>
    );
}