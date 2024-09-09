import {SVGProps} from "react";

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width="1em"
             height="1em"
             viewBox="0 0 24 24" {...props}>
            <path fill="currentColor"
                  d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47"/>
        </svg>
    );
}