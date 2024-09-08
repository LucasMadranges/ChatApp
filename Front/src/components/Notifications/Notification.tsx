export default function Notification({notification}: {
    notification: {
        id: number
        text: string,
        hour: string,
    }
}) {
    return (
        <div className="p-4 border-b border-gray-200 flex items-center justify-between gap-4 transition hover:bg-gray-100">
            <div className="flex items-center justify-start gap-2 min-w-fit">
                <div className="flex flex-col min-w-fit">
                    <span>{notification.text}</span>
                </div>
            </div>
            <p className="text-sm text-gray-400 truncate">{notification.hour}</p>
        </div>
    );
}