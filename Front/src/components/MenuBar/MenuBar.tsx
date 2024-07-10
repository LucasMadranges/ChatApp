import LinkMenu from "@/components/MenuBar/LinkMenu";
import TopMenu from "@/components/MenuBar/TopMenu";

export default function MenuBar() {
    return (
        <section className="min-w-fit bg-gray-900 p-2">
            <TopMenu/>
            <span className="inline-block border border-gray-700 w-full my-4"></span>
            <LinkMenu/>
        </section>
    );
}