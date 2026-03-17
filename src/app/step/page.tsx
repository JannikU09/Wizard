"use client"

import { PersonalInfo } from "@/src/components/steps/personalInfo/personalInfo";
import { ResidenceInfo } from "@/src/components/steps/residenceInfo/residenceInfo";
import { ContactInfo } from "@/src/components/steps/contactInfo/contactInfo";
import { Summary } from "@/src/components/steps/summary/summary";
import { indexAtom } from "@/src/store/stateStore";
import { FlowStep } from "@/src/utils/steps";
import { useAtomValue } from "jotai";

export default function Page() {

    const index = useAtomValue(indexAtom)

    const steps: FlowStep[] = [
        { id: "Step1", component: <PersonalInfo /> },
        { id: "Step2", component: <ResidenceInfo /> },
        { id: "Step3", component: <ContactInfo /> },
        { id: "Step4", component: <Summary /> },
    ];

    return (
        <div>
            <div>
                {steps[index].component}
            </div>
        </div>
    )
}