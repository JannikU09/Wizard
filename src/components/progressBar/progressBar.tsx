"use client"

import { steps } from "../../utils/steps";
import { indexAtom } from "@/src/store/stateStore";
import { useAtomValue } from "jotai";
import "./progressBar.css";

export const ProgressBar = () => {

    const index = useAtomValue(indexAtom);

    const percentage = ((index + 1) / steps.length) * 100;
    console.log("Length: " + steps.length);
    console.log("%: " + percentage);

    return (
        <div className="progressBarContainer">
            <div
                className="progressBar"
                style={{ width: `${percentage}%` }}
            />
        </div>
    )
}
