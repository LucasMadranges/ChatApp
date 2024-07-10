import UserCard from "@/components/UserList/UserCard";

export default function UsersList() {
    const objUser = {
        id: 7657986588965,
        firstName: "Prénom",
        lastName: "Nom",
    };

    const arrUser = Array.from({length: 25}, () => objUser);

    return (
        <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full lg:gap-12 gap-6 lg:p-12 p-6 overflow-auto">
            {arrUser.map((user, index) => {
                return (
                    <UserCard key={index}
                              user={user}/>
                );
            })}
        </section>
    );
}