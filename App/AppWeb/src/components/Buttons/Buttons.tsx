import React, {MouseEventHandler} from "react";

export default function Buttons({children, className, handleClick}: {
    children: Readonly<React.ReactNode>,
    className?: string,
    handleClick?: MouseEventHandler
}) {
    return (
        <button onClick={handleClick}
                className={`w-fit rounded-full transition active:scale-95 ${className}`}>{children}</button>
    );
}