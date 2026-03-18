import { Box } from "@mui/material";
import { TextField } from "@mui/material";

interface FormFieldProps {
    label: string;
    width?: string;
    handleChange?: React.ChangeEventHandler;
    value?: string;
    helperText?: string;
    error?: boolean;
    placeholder?: string
}

export const FormField: React.FC<FormFieldProps> = ({
    label,
    width,
    handleChange,
    value,
    helperText,
    error,
    placeholder
}) => {
    return (

        <div
            style={{
                margin: "auto 5px"
            }}
        >
            <Box sx={{ m: 1, width: width }}>
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
                    placeholder={placeholder}
                />
            </Box>
        </div>
    )
}
