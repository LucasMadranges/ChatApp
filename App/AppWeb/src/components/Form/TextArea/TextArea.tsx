import {ChangeEventHandler} from "react";

export default function TextArea({label, labelClass, placeholder, rows, cols, value, onChange, className}: {
    label?: string,
    labelClass?: string,
    placeholder: string,
    rows?: number,
    cols?: number,
    value: any,
    onChange: ChangeEventHandler,
    className?: string
}) {
    return (
        <>
            {label && <label className={`${labelClass}`}>{label}</label>}
            <textarea placeholder={placeholder}
                      value={value}
                      onChange={onChange}
                      className={`placeholder:text-gray-400 rounded-xl bg-gray-200 px-4 py-3 w-full ${className}`}
                      rows={rows}
                      cols={cols}/>
        </>
    );
}