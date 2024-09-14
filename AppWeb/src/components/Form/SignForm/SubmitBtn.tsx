import React from "react";

export default function SubmitBtn({children}: { children: React.ReactNode }) {
    return (
        <button className="bg-gray-900 hover:bg-gray-800 active:scale-95 transition text-white px-4 py-3 rounded-md mt-2 w-full sm:w-fit">
            {children}
        </button>
    );
}