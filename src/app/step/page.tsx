"use client"

import { Step1 } from "@/src/components/step1/step1";
import { Step2 } from "@/src/components/step2/step2";
import { Step3 } from "@/src/components/step3/step3";
import { Step4 } from "@/src/components/step4/step4";
import { indexAtom } from "@/src/store/stateStore";
import { useAtomValue } from "jotai";

export default function Page() {

    const index = useAtomValue(indexAtom)

    switch (index) {
        case 0:
            return (
                <Step1 />
            );
        case 1:
            return (
                <Step2 />
            );
        case 2:
            return (
                <Step3 />
            );
        case 3:
            return (
                <Step4 />
            );
        default:
            return (
                <p>Zu großer Index</p>
            )
    }
}