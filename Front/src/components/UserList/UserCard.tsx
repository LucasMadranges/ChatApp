import Image from "next/image";
import UserProfile from "../../../public/people/people-2.jpg";
import AddFriendBtn from "@/components/UserList/AddFriendBtn";

export default function UserCard({user}: {
    user: { id: number, lastName: string, firstName: string }
}) {
    return (
        <div className="border border-gray-300 p-8 rounded-lg flex items-center justify-center gap-4 h-36 transition hover:bg-gray-100">
            <Image src={UserProfile}
                   alt="Image utilisateur"
                   width={512}
                   height={512}
                   className="rounded-full w-20 h-20 object-cover"/>
            <div className="flex flex-col gap-2 w-full">
                <span className="text-xl">{user.lastName} {user.firstName}</span>
                <p className="text-sm text-gray-500 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Beatae commodi culpa, debitis dolor dolores ea expedita incidunt labore magni molestiae nulla
                    porro qui ratione repudiandae saepe sapiente voluptatem! Laborum, molestiae.</p>
            </div>
            <AddFriendBtn/>
        </div>
    );
}