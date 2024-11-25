import React from "react";

export default function Section({children}: { children: React.ReactNode }) {
    return (
        <section className="w-full flex justify-center overflow-auto">
            <div className="max-w-screen-xl lg:p-32 md:p-16 p-8 w-full h-fit">
                {children}
            </div>
        </section>
    );
}