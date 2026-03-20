"use client"

import { PersonalInfo } from "../steps/personalInfo/personalInfo";
import { ResidenceInfo } from "../steps/residenceInfo/residenceInfo";
import { ContactInfo } from "../steps/contactInfo/contactInfo";
import { Summary } from "../steps/summary/summary";
import { indexAtom } from "@/src/store/stateStore";
import { FlowStep } from "@/src/utils/steps";
import { useAtomValue } from "jotai";
import {
    Box,
    Stepper,
    Step,
    StepLabel
} from "@mui/material";

export const ClientPage = () => {
    const index = useAtomValue(indexAtom);

    const steps: FlowStep[] = [
        { id: "Step1", component: <PersonalInfo />, label: "Personal Label" },
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
