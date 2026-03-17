import { useAtom } from "jotai";
import { FormButton } from "../atoms/button/button";
import { FormField } from "../atoms/formField/formField";
import { eMailAtom, indexAtom, phoneNumberAtom } from "@/src/store/stateStore";
import React from "react";
import { validation } from "@/src/store/validation";

export const Step3 = () => {

    const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
    const [eMail, setEMail] = useAtom(eMailAtom);
    const [index, setIndex] = useAtom(indexAtom);


    const handlePhoneNumber = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPhoneNumber(event.target.value);
    }

    const handleEMail = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEMail(event.target.value);
    }

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (
            eMail !== "" &&
            validation.isNumeric(phoneNumber) === true
        ) {
            setIndex(index + 1);
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormField label="E-Mail" placeholder="m.muster@example.de" handleChange={handleEMail} value={eMail} error={eMail === "" ? true : false} />
                <FormField label="Telefonnummer" placeholder="z.B. +49..." handleChange={handlePhoneNumber} value={phoneNumber} error={validation.isNumeric(phoneNumber) === true ? false : true}/>

                <FormButton text="Back" variant="contained" id="back" type="button" onClick={() => setIndex(index - 1)} />
                <FormButton text="Next" variant="outlined" id="next" type="submit" />

            </form>
        </>
    )
}
