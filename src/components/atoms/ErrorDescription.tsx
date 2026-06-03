import { Typography } from "@mui/material"

type ErrorDescriptionProps = {
    message: string
}

function ErrorDescription({ message }: ErrorDescriptionProps) {
    return (
        <Typography variant="body1">{message}</Typography>
    )
}

export default ErrorDescription