"use client"

import React from "react";
import { useAtom } from "jotai";
import { FormButton } from "../../button/button";
import { FormField } from "../../formField/formField";
import { indexAtom, numberAtom, ortAtom, plzAtom, streetAtom } from "@/src/store/stateStore";
import { validation } from "@/src/utils/validation";
import "./residenceInfo.css";

export const ResidenceInfo = () => {

    const [street, setStreet] = useAtom(streetAtom);
    const [number, setNumber] = useAtom(numberAtom);
    const [plz, setPLZ] = useAtom(plzAtom);
    const [ort, setOrt] = useAtom(ortAtom);
    const [index, setIndex] = useAtom(indexAtom);

    const handleStreet = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setStreet(event.target.value);
    }

    const handleNumber = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNumber(event.target.value);
    }

    const handlePLZ = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPLZ(event.target.value);
    }

    const handleOrt = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOrt(event.target.value);
    }

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (
            street !== "" &&
            ort !== "" &&
            number !== "" &&
            plz.length === 5 &&
            validation.isNumeric(plz) === true
        ) {
            setIndex(index + 1);
        }
    }

    return (
        <>
            <form
                className="residenceInfo"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <FormField label="Straße" handleChange={handleStreet} value={street} error={street === "" ? true : false} />
                <FormField label="Hausnummer" width="125px" handleChange={handleNumber} value={number} error={number === "" ? true : false} />
                <FormField label="PLZ" width="125px" handleChange={handlePLZ} value={plz} error={plz.length === 5 && validation.isNumeric(plz) === true ? false : true} />
                <FormField label="Ort" handleChange={handleOrt} value={ort} error={ort === "" ? true : false} />

                <FormButton text="Back" variant="contained" id="back" type="button" onClick={() => setIndex(index - 1)} />
                <FormButton text="Next" variant="outlined" id="next" type="submit" />
            </form>
        </>
    )
}
