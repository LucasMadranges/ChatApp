import Image from "next/image";

import PictureReceiver from "@/../public/people/people-2.jpg";
import {BackArrowIcon} from "@/components/Icons/BackArrowIcon";
import Link from "next/link";

export default function Chat() {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="px-4 py-2 border-b border-gray-200 h-fit w-full">
                    <div className="flex items-center justify-start gap-2">
                        <Link href="/chats">
                            <BackArrowIcon width="24px"
                                           height="24px"/>
                        </Link>
                        <Image src={PictureReceiver}
                               alt="Photo de profil"
                               width={48}
                               height={48}
                               className="rounded-full h-12 object-cover"/>
                        <div className="flex flex-col">
                            <span>John Doe</span>
                            <div className="flex gap-2 items-center">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                                <span className="text-sm text-gray-500">En ligne</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-auto">
                    Chat
                </div>
                <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-center">
                    <input type="text"
                           placeholder="Votre message..."
                           className="rounded-full bg-gray-200 placeholder:text-gray-400 px-4 py-2 w-full"/>
                </div>
            </div>
        </>
    );
}