import ListUser from "@/components/ListChats/ListUser";

export default function ListChats() {
    const objUser = {
        id: 7657986588965,
        firstName: "Prénom",
        lastName: "Nom",
        hourLastMessage: "18:53",
        lastMessage: "Hello Benjamin! Comment vas-tu ?",
    };

    const arrUser = Array.from({length: 24}, () => objUser);

    return (
        <section className="w-full overflow-auto">
            {arrUser.map((user, index) => {
                return (
                    <ListUser key={index}
                              user={user}/>
                );
            })}
        </section>
    );
}