import {ChatAppLogo} from "@/components/Icons/ChatAppLogo";
import Image from "next/image";
import ProfilPicture from "../../../public/people/people-1.jpg";
import Link from "next/link";

export default function TopMenu() {
    return (
        <div className="flex flex-col gap-4">
            <Link href="/"
                  className="flex items-center justify-center gap-4">
                <ChatAppLogo className="w-8 h-8"/>
                <span className="hidden lg:inline-block text-white">ChatApp by Lucas M.</span>
            </Link>
            <div className="flex flex-col items-center justify-center">
                <Image src={ProfilPicture}
                       alt="Photo de profil"
                       width={32}
                       height={32}
                       className="rounded-full h-8 lg:w-12 lg:h-12 object-cover"/>
                <span className="hidden lg:inline-block text-white text-sm">Lucas Madranges</span>
            </div>
        </div>
    );
}