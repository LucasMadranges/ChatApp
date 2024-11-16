import {SVGProps} from "react";

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width="28px"
             height="28px"
             viewBox="0 0 24 24" {...props}>
            <path fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 7l10 10M7 17L17 7"/>
        </svg>
    );
}