export default function BottomBar() {
    return (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-center">
            <input type="text"
                   placeholder="Votre message..."
                   className="rounded-full bg-gray-200 placeholder:text-gray-400 px-4 py-2 w-full"/>
        </div>
    );
}