import Notification from "@/components/Notifications/Notification";

export default function ListNotifications() {
    const objNotifications = {
        id: 7657986588965,
        text: "Vous avez une nouvelle demande d'amis",
        hour: "08/09/2024 - 09:09",
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