import {SVGProps} from "react";

export function MessageIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width="1em"
             height="1em"
             viewBox="0 0 24 24" {...props}>
            <path fill="white"
                  d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-3-5h-2V9h2m-4 2h-2V9h2m-4 2H7V9h2"/>
        </svg>
    );
}