import {SearchIcon} from "@/components/Icons/SearchIcon";
import UsersList from "@/components/UserList/UsersList";
import SearchInput from "@/components/Search/SearchInput";

export default function Page() {
    return (
        <>
            <section className="lg:p-12 p-6 overflow-auto w-full">
                <div className="relative">
                    <SearchInput/>
                    <SearchIcon className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 [&_path]:fill-gray-400"/>
                </div>
                <UsersList/>
            </section>
        </>
    );
}