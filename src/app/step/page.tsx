"use client"

import React from "react";
import { Step1 } from "@/src/components/step1/step1";
import { Step2 } from "@/src/components/step2/step2";
import { Step3 } from "@/src/components/step3/step3";
import { Step4 } from "@/src/components/step4/step4";
import { indexAtom } from "@/src/store/stateStore";
import { FlowStep } from "@/src/utils/steps";
import { useAtomValue } from "jotai";

export default function Page() {

    const index = useAtomValue(indexAtom)

    const steps: FlowStep[] = [
        { id: "Step1", component: <Step1 /> },
        { id: "Step2", component: <Step2 /> },
        { id: "Step3", component: <Step3 /> },
        { id: "Step4", component: <Step4 /> },
    ];

    return (
        <div>
            <div>
                {steps[index].component}
            </div>
        </div>
    )
}