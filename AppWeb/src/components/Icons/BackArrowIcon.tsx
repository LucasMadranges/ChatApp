import {SVGProps} from "react";

export function BackArrowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width="1em"
             height="1em"
             viewBox="0 0 16 16" {...props}>
            <path fill="black"
                  d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06"/>
        </svg>
    );
}