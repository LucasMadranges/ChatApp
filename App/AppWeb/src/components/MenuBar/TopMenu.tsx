import {ChatAppLogo} from "@/components/Icons/ChatAppLogo";
import Image from "next/image";
import Link from "next/link";
import {useSession} from "@/utils/hooks/useSession";

export default async function TopMenu() {
    const session: any = await useSession();

    return (
        <div className="flex flex-col gap-4">
            <Link href="/"
                  className="flex items-center justify-center gap-4 transition hover:opacity-75">
                <ChatAppLogo className="w-8 h-8"/>
                <span className="hidden lg:inline-block text-white">ChatApp by Lucas M.</span>
            </Link>
            <div className="flex flex-col items-center justify-center gap-2">
                <Link href="/profile"
                      className="hover:opacity-75 transition">
                    <Image src={session.user.imgProfile}
                           alt="Photo de profil"
                           width={256}
                           height={256}
                           className="rounded-full h-8 w-8 lg:w-12 lg:h-12 object-cover"/>
                </Link>
                <span className="hidden lg:inline-block text-white text-sm">{session.user.lastname} {session.user.firstname}</span>
            </div>
        </div>
    );
}