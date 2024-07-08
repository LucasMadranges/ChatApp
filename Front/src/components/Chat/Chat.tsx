import TopBar from "@/components/Chat/TopBar";
import BottomBar from "@/components/Chat/BottomBar";

export default function Chat() {
    return (
        <>
            <section className="flex flex-col flex-1">
                <TopBar/>
                <div className="flex-1 overflow-auto">
                    Chat
                </div>
                <BottomBar/>
            </section>
        </>
    );
}