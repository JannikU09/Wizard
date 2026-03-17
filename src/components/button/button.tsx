import { Button } from "@mui/material";

interface ButtonProps {
    icon?: React.ReactNode;
    text?: string;
    variant: "text" | "outlined" | "contained";
    id: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
}

export const FormButton: React.FC<ButtonProps> = ({
    icon,
    text,
    variant,
    id,
    onClick,
    type
}) => {
    return (
        <Button
            id={id}
            variant={variant}
            sx={{
                margin: "auto 12.5px"
            }}
            onClick={onClick}
            type={type}
        >
            {text}
            {icon}
        </Button>
    )
}
