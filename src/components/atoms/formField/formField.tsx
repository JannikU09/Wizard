import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import "./formField.css";

interface FormFieldProps {
    label: string;
    width?: string;
    handleChange?: React.ChangeEventHandler;
    value?: string;
    helperText?: string;
    error?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    width,
    handleChange,
    value,
    helperText,
    error
}) => {
    return (

        <div
            style={{
                margin: "auto 5px"
            }}
        >
            <Box
                component="form"
                sx={{ m: 1, width: width }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    className="formField"
                    helperText={helperText}
                    id="formField"
                    label={label}
                    variant="outlined"
                    onChange={handleChange}
                    type="text"
                    value={value ?? ''}
                    error={error}
                />
            </Box>
        </div>
    )
}
