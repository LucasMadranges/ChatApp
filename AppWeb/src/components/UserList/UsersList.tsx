"use client";
import UserCard from "@/components/UserList/UserCard";
import {useQuery} from "@/utils/hooks/useQuery";
import {fetchUsersDB} from "@/utils/lib/fetchUsers";
import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";
import {useSessionClient} from "@/utils/hooks/useSessionClient";

export default function UsersList() {
    const {loading, data, error}: any = useQuery(fetchUsersDB);
    const session = useSessionClient();

    if (loading) {
        return <Loading/>;
    } else if (error) {
        return <Error error={error}/>;
    } else {
        const filteredData = data.filter((user: { id: any; }) => user.id != session.id);

        if (filteredData.length === 0) {
            return <h1>Aucun utilisateur trouvé</h1>;
        } else {
            return (
                <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full lg:gap-12 gap-6 lg:py-12 py-6 overflow-auto">
                    {filteredData.map((user: any, index: any) => {
                        return (
                            <UserCard key={index}
                                      user={user}/>
                        );
                    })}
                </section>
            );
        }
    }
}