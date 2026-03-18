"use client"

import { PersonalInfo } from "@/src/components/steps/personalInfo/personalInfo";
import { ResidenceInfo } from "@/src/components/steps/residenceInfo/residenceInfo";
import { ContactInfo } from "@/src/components/steps/contactInfo/contactInfo";
import { Summary } from "@/src/components/steps/summary/summary";
import { indexAtom } from "@/src/store/stateStore";
import { FlowStep } from "@/src/utils/steps";
import { useAtomValue } from "jotai";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function Page() {

    const index = useAtomValue(indexAtom);

    const steps: FlowStep[] = [
        { id: "Step1", component: <PersonalInfo />, label: "Personal Info" },
        { id: "Step2", component: <ResidenceInfo />, label: "Residence Info" },
        { id: "Step3", component: <ContactInfo />, label: "Contact Info" },
        { id: "Step4", component: <Summary />, label: "Summary" },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <Box sx={{ width: "100%" }}>
                <Stepper activeStep={index} alternativeLabel>
                    {steps.map((step) => (
                        <Step key={step.id}>
                            <StepLabel>{step.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <div>
                {steps[index].component}
            </div>
        </div>
    )
}