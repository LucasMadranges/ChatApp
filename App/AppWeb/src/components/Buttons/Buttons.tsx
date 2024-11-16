import React, {MouseEventHandler} from "react";

export default function Buttons({children, textColor, textHoverColor, bgColor, hoverBgColor, className, handleClick}: {
    children: Readonly<React.ReactNode>,
    textColor?: string,
    textHoverColor?: string,
    bgColor?: string,
    hoverBgColor?: string,
    className?: string,
    handleClick?: MouseEventHandler
}) {
    return (
        <button onClick={handleClick}
                className={`bg-${bgColor} hover:bg-${hoverBgColor} text-${textColor} hover:bg-${textHoverColor} w-fit rounded-full transition active:scale-95 ${className}`}>{children}</button>
    );
}