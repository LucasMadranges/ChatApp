import {SVGProps} from "react";

export function AddPeopleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width="1em"
             height="1em"
             viewBox="0 0 24 24" {...props}>
            <path fill="currentColor"
                  d="M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-5.477 2a6.5 6.5 0 0 0-.709 1.5H4.253a.75.75 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214q.896 0 1.68-.106c.246.495.553.954.912 1.367q-1.193.24-2.592.24c-3.145 0-5.532-.906-7.098-2.74a3.75 3.75 0 0 1-.898-2.435v-.578A2.25 2.25 0 0 1 4.253 14zm5.477 0l-.09.008a.5.5 0 0 0-.402.402L17 14.5V17h-2.496l-.09.008a.5.5 0 0 0-.402.402l-.008.09l.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.5l.008.09a.5.5 0 0 0 .402.402l.09.008l.09-.008a.5.5 0 0 0 .402-.402L18 20.5V18h2.504l.09-.008a.5.5 0 0 0 .402-.402l.008-.09l-.008-.09a.5.5 0 0 0-.402-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.402zM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"/>
        </svg>
    );
}