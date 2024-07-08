import {ChatAppLogo} from "@/components/Icons/ChatAppLogo";
import Image from "next/image";
import ProfilPicture from "../../../public/people/people-1.jpg";
import Link from "next/link";

export default function TopMenu() {
    return (
        <div className="flex flex-col gap-4">
            <Link href="/"
                  className="flex items-center justify-center gap-4">
                <ChatAppLogo width="32px"
                             height="32px"/>
                <span className="hidden">ChatApp by Lucas M.</span>
            </Link>
            <div className="flex flex-col items-center justify-center">
                <Image src={ProfilPicture}
                       alt="Photo de profil"
                       width={32}
                       height={32}
                       className="rounded-full h-8 object-cover"/>
            </div>
        </div>
    );
}