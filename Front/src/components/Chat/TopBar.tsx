import Link from "next/link";
import {BackArrowIcon} from "@/components/Icons/BackArrowIcon";
import Image from "next/image";
import PictureReceiver from "../../../public/people/people-2.jpg";

export default function TopBar() {
    return (
        <div className="px-4 py-2 border-b border-gray-200 h-fit w-full">
            <div className="flex items-center justify-start gap-2">
                <Link href="/app/chats"
                      className="flex items-center justify-center hover:bg-gray-200 transition p-2 rounded-full">
                    <BackArrowIcon width="24px"
                                   height="24px"
                                   className="flex items-center justify-center"/>
                </Link>
                <Image src={PictureReceiver}
                       alt="Photo de profil"
                       width={512}
                       height={512}
                       className="rounded-full h-12 w-12 object-cover"/>
                <div className="flex flex-col">
                    <span>John Doe</span>
                    <div className="flex gap-2 items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                        <span className="text-sm text-gray-500">En ligne</span>
                    </div>
                </div>
            </div>
        </div>
    );
}