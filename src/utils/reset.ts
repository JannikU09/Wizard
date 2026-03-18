import { useSetAtom } from "jotai";
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
} from "../store/stateStore";

export const useReset = () => {

    const setIndex = useSetAtom(indexAtom);
    const setName = useSetAtom(nameAtom);
    const setAge = useSetAtom(ageAtom);
    const setStreet = useSetAtom(streetAtom);
    const setNumber = useSetAtom(numberAtom);
    const setPLZ = useSetAtom(plzAtom);
    const setOrt = useSetAtom(ortAtom);
    const setEMail = useSetAtom(eMailAtom);
    const setPhoneNumber = useSetAtom(phoneNumberAtom);


    return () => {
        setIndex(0);
        setName("");
        setAge("");
        setStreet("");
        setNumber("");
        setPLZ("");
        setOrt("");
        setEMail("");
        setPhoneNumber("");
    }
}