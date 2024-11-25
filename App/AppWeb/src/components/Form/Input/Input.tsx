import {ChangeEventHandler} from "react";

export default function Input({label, labelClass, placeholder, type, value, onChange, className}: {
    label?: string,
    labelClass?: string,
    placeholder: string,
    type: string,
    value: any,
    onChange: ChangeEventHandler,
    className?: string
}) {
    return (
        <>
            {label && <label className={`${labelClass}`}>{label}</label>}
            <input type={type}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
                   className={`placeholder:text-gray-400 rounded-full bg-gray-200 px-4 py-3 w-full ${className}`}/>
        </>
    );
}