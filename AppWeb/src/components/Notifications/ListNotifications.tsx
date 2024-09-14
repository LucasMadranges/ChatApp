import Notification from "@/components/Notifications/Notification";

export default function ListNotifications() {
    const objNotifications = {
        id: 7657986588965,
        type: "newFriend",
        date: new Date("2024-09-09T08:40:09.594Z"),
    };

    const arrUser = Array.from({length: 24}, () => objNotifications);

    return (
        <section className="w-full overflow-auto">
            {arrUser.map((user, index) => {
                return (
                    <Notification key={index}
                                  notification={user}/>
                );
            })}
        </section>
    );
}