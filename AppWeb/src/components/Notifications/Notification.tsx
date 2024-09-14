export default function Notification({notification}: {
    notification: {
        id: number
        type: string,
        date: Date,
    }
}) {

    const textNotification = notification.type === "newFriend" ? "Vous avez une nouvelle demande d'amis" : undefined;

    const formattedDate: string = formatDate(notification.date);

    return (
        <div className="p-4 border-b border-gray-200 flex items-center justify-between gap-4 transition hover:bg-gray-100">
            <div className="flex items-center justify-start gap-2 min-w-fit">
                <div className="flex flex-col min-w-fit">
                    <span>{textNotification}</span>
                </div>
            </div>
            <p className="text-sm text-gray-400 truncate">{formattedDate}</p>
        </div>
    );
}

function formatDate(formatDate: Date) {
    console.log(formatDate);
    // Separate date and hour in a table the date in database
    const arrDate = formatDate.toLocaleString().trim().replace(" ", "").split(",");

    // Separate date and hour in a table the current date
    const currentDate = new Date();
    const currentFormattedDate = currentDate.toLocaleString().trim().replace(" ", "").split(",");

    let day: string,
        hour: string;

    if (currentFormattedDate[0] === arrDate[0]) {
        day = "Aujourd'hui";
    } else if (formatDate.getDate() + 1 === currentDate.getDate()) {
        day = "Hier";
    } else {
        day = `le ${currentFormattedDate[0]}`;
    }

    const hourNoFormatted = arrDate[1];

    const hourFormatted = hourNoFormatted.replace(" AM", "").replace(" PM", "");
    const [hours, minutes] = hourFormatted.split(":");
    hour = `${hours}h${minutes}`;

    return `${day} à ${hour}`;
}