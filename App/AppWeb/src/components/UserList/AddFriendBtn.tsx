"use client";
import {AddPeopleIcon} from "@/components/Icons/AddPeopleIcon";
import {useState} from "react";
import {CheckIcon} from "@/components/Icons/CheckIcon";

export default function AddFriendBtn() {
    const [state, setState] = useState(false);

    return (
        <button onClick={() => setState(true)}>
            {!state && <AddPeopleIcon width="32px"
                                      height="32px"/>}
            {state && <CheckIcon width="32px"
                                 height="32px"/>}
        </button>
    );
}