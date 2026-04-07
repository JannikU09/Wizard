"use client"

import { indexAtom } from "@/src/store/stateStore";
import { steps } from "@/src/utils/steps";
import { useAtomValue } from "jotai";

export const ClientPage = () => {

    const index = useAtomValue(indexAtom);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div>
                {steps[index].component}
            </div>
        </div>
    )
}
