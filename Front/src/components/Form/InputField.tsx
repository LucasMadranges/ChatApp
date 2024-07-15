import React from "react";

export default function InputField({labelText, inputPlaceholder, type, name}: {
    labelText: string,
    inputPlaceholder: string,
    type: string,
    name: string
}) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={name}
                   className="text-lg">{labelText}</label>
            <input id={name}
                   name={name}
                   type={type}
                   placeholder={inputPlaceholder}
                   className="px-4 py-2 rounded-md"/>
        </div>
    );
}