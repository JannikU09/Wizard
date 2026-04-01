"use client"

import { steps } from "../../utils/steps";
import { indexAtom } from "@/src/store/stateStore";
import { useAtomValue } from "jotai";
import "./progressBar.css";

export const ProgressBar = () => {

    const index = useAtomValue(indexAtom);

    const percentage = Math.round((index + 1) / steps.length * 100);

    return (
        <div className="progressBarContainer">
            <div
                className="progressBar"
                style={{ width: `${percentage}%` }}
            >
                <div className="text">
                    {percentage + " %"}
                </div>
            </div>
        </div>
    )
}
