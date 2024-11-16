import {useSession} from "@/utils/hooks/useSession";
import ProfileForm from "@/components/Form/ProfileForm/ProfileForm";
import Section from "@/components/Section/Section";

export default async function Page() {
    const session: any = await useSession();

    return (
        <>
            <Section>
                <ProfileForm session={session}/>
            </Section>
        </>
    );
}