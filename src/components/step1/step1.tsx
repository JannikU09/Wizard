import { FormButton } from "@/src/components/atoms/button/button";
import { FormField } from "@/src/components/atoms/formField/formField";
import { ageAtom, indexAtom, nameAtom } from "@/src/store/stateStore";
import { validation } from "@/src/utils/validation";
import { useAtom } from "jotai";

export const Step1 = () => {

    const [name, setName] = useAtom(nameAtom);
    const [age, setAge] = useAtom(ageAtom);
    const [index, setIndex] = useAtom(indexAtom);

    const handleName = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setName(event.target.value);
    }

    const handleAge = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAge(event.target.value);
    }

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(validation.isNumeric(age));

        if (name !== "" && validation.isNumeric(age) === true) {
            setIndex(index + 1);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="step1">
                <FormField label="Name" handleChange={handleName} value={name} error={name === "" ? true : false} />
                <FormField label="Age" handleChange={handleAge} value={age} error={validation.isNumeric(age) !== true ? true : false} helperText={validation.isNumeric(age) !== true ? "Nur gültige Zahlen" : ""} />

                <FormButton text="Next" variant="outlined" id="next" type="submit" />
            </form>
        </>
    )
}
