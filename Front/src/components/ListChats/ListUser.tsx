import Image from "next/image";
import PictureReceiver from "../../../public/people/people-2.jpg";
import Link from "next/link";

export default function ListUser({user}: {
    user: {
        id: number
        lastName: string,
        firstName: string,
        hourLastMessage: string,
        lastMessage: string
    }
}) {
    return (
        <Link href={`/chats/${user.id}`}
              className="p-4 border-b border-gray-200 flex items-center justify-between gap-4 transition hover:lg:bg-gray-100">
            <div className="flex items-center justify-start gap-2 min-w-fit">
                <Image src={PictureReceiver}
                       alt="Photo de profil"
                       width={512}
                       height={512}
                       className="rounded-full h-12 w-12 object-cover"/>
                <div className="flex flex-col min-w-fit">
                    <span>{user.lastName} {user.firstName}</span>
                    <div className="flex gap-2 items-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                        <span className="text-sm text-gray-500">En ligne</span>
                    </div>
                </div>
            </div>
            <p className="text-sm text-gray-400 truncate">{user.hourLastMessage} - {user.lastMessage}</p>
        </Link>
    );
}