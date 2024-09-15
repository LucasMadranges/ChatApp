import Image from "next/image";
import AddFriendBtn from "@/components/UserList/AddFriendBtn";

export default function UserCard({user}: {
    user: { lastname: string, firstname: string, description: string, imgProfile: string }
}) {


    return (
        <div className="border border-gray-300 p-8 rounded-lg flex items-center justify-center gap-4 h-36 transition hover:bg-gray-100">
            <Image src={user.imgProfile}
                   alt="Image utilisateur"
                   width={512}
                   height={512}
                   className="rounded-full w-20 h-20 object-cover"/>
            <div className="flex flex-col gap-2 w-full">
                <span className="text-xl">{user.lastname} {user.firstname}</span>
                {user.description &&
                    <p className="text-sm text-gray-500 line-clamp-3">{user.description}</p>
                }
            </div>
            <AddFriendBtn/>
        </div>
    );
}