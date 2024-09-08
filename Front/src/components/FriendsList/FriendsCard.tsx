import Link from "next/link";
import Image from "next/image";
import UserProfile from "../../../public/people/people-2.jpg";

export default function FriendsCard({user}: {
    user: { id: number, lastName: string, firstName: string }
}) {
    return (
        <Link href={`/app/chats/${user.id}`}
              className="border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center gap-4 h-52 transition hover:bg-gray-100">
            <Image src={UserProfile}
                   alt="Image utilisateur"
                   width={512}
                   height={512}
                   className="rounded-full w-20 h-20 object-cover"/>
            <span className="text-xl">{user.lastName} {user.firstName}</span>
            <span className="text-sm text-gray-500 line-clamp-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aspernatur consequuntur ipsam iusto laborum nesciunt odit officia perferendis repellendus tempora, tempore totam velit vero? Culpa ipsam quae saepe sint voluptatibus.</span>
        </Link>
    );
}