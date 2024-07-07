import {SVGProps} from "react";

export function AddChatIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width="1em"
             height="1em"
             viewBox="0 0 24 24" {...props}>
            <path fill="white"
                  d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"/>
            <path fill="white"
                  d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"/>
        </svg>
    );
}