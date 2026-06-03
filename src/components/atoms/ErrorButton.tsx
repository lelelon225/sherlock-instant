import { Button } from "@mui/material"

type ErrorButtonProps = {
    onButtonClick?: () => void
}

function ErrorButton({ onButtonClick }: ErrorButtonProps) {
    return (
                <Button variant="outlined" color="primary" onClick={onButtonClick}>
                    Go to Home
                </Button>
    )
}

export default ErrorButton