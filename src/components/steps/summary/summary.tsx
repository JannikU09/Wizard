"use client"

import { useAtom, useAtomValue } from "jotai";
import {
    indexAtom,
    nameAtom,
    ageAtom,
    streetAtom,
    numberAtom,
    plzAtom,
    ortAtom,
    eMailAtom,
    phoneNumberAtom
} from "@/src/store/stateStore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { FormButton } from "../../button/button";
import { Headline } from "../../headline/headline";
import { useReset } from "@/src/utils/reset";


export const Summary = () => {

    const name = useAtomValue(nameAtom);
    const eMail = useAtomValue(eMailAtom);
    const street = useAtomValue(streetAtom);
    const number = useAtomValue(numberAtom);
    const plz = useAtomValue(plzAtom);
    const ort = useAtomValue(ortAtom);
    const phoneNumber = useAtomValue(phoneNumberAtom);
    const age = useAtomValue(ageAtom);
    const [index, setIndex] = useAtom(indexAtom);

    const reset = useReset();

    const style = {
        py: 0,
        width: "100%",
        maxWidth: 360,
        border: "1px solid",
        borderRadius: 2,
        borderColor: "divider",
        backgroundColor: "background.paper",
        margin: "15px 12.5px",
    }

    return (
        <div>
            <Headline text="Zusammenfassung" size={2} />
            <List sx={style}>
                <ListItem>
                    <ListItemText primary={name} title="Name" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary={`Alter: ${age}`} />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary={street} />
                    <ListItemText primary={number} />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary={plz} />
                    <ListItemText primary={ort} />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary={eMail} />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary={phoneNumber} />
                </ListItem>
            </List>
            <FormButton text="Back" variant="contained" id="back" type="button" onClick={() => setIndex(index - 1)} />
            <FormButton text="Reset" variant="outlined" id="reset" type="reset" onClick={reset} />
        </div>
    )

}