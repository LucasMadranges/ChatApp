import {ChatAppLogo} from "@/components/Icons/ChatAppLogo";
import Image from "next/image";

import ProfilPicture from "../../../public/people/people-1.jpg";
import {MessageIcon} from "@/components/Icons/MessageIcon";
import {PeoplesIcon} from "@/components/Icons/PeoplesIcon";
import {AddChatIcon} from "@/components/Icons/AddChatIcon";

export default function MenuBar() {
    return (
        <section className="w-fit h-svh bg-gray-900 p-2">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-4">
                    <ChatAppLogo width="32px"
                                 height="auto"/>
                    <span className="hidden">ChatApp by Lucas M.</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image src={ProfilPicture}
                           alt="Photo de profil"
                           width={32}
                           height={32}
                           className="rounded-full h-8 object-cover"/>
                </div>
            </div>
            <span className="inline-block border border-gray-700 w-full my-4"></span>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center">
                    <MessageIcon width="32px"
                                 height="auto"/>
                </div>
                <div className="flex items-center justify-center">
                    <PeoplesIcon width="32px"
                                 height="auto"/>
                </div>
                <div className="flex items-center justify-center">
                    <AddChatIcon width="32px"
                                 height="auto"/>
                </div>
            </div>
        </section>
    );
}