import { ContactInfo } from "../components/steps/contactInfo/contactInfo";
import { PersonalInfo } from "../components/steps/personalInfo/personalInfo";
import { ResidenceInfo } from "../components/steps/residenceInfo/residenceInfo";
import { Summary } from "../components/steps/summary/summary";

interface FlowStep {
    id: string;
    component: React.ReactNode;
    label?: string;
}

export const steps: FlowStep[] = [
    { id: "Step1", component: <PersonalInfo /> },
    { id: "Step1", component: <ResidenceInfo /> },
    { id: "Step3", component: <ContactInfo /> },
    { id: "Step4", component: <Summary /> },
];
