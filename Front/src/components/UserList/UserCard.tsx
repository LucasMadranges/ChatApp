import Link from "next/link";
import Image from "next/image";
import UserProfile from "../../../public/people/people-2.jpg";

export default function UserCard({user}: {
    user: { id: number, lastName: string, firstName: string }
}) {
    return (
        <Link href={`/app/chats/${user.id}`}
              className="border border-gray-300 p-2 rounded-lg flex flex-col items-center justify-center gap-4 h-52 transition hover:bg-gray-100">
            <Image src={UserProfile}
                   alt="Image utilisateur"
                   width={512}
                   height={512}
                   className="rounded-full w-20 h-20 object-cover"/>
            <span className="text-xl">{user.lastName} {user.firstName}</span>
        </Link>
    );
}