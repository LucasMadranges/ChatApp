import Chat from "@/components/Chat/Chat";

export default function Page({params}: { params: any }) {
    console.log(params);

    return (
        <>
            <Chat/>
        </>
    );
}