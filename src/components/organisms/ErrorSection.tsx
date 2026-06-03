import { Grid } from "@mui/material"
import ErrorCodes from "../atoms/ErrorCodes"
import ErrorExpression from "../atoms/ErrorExpression"
import ErrorDescription from "../atoms/ErrorDescription"
import ErrorButton from "../atoms/ErrorButton"

type ErrorSectionProps = {
    code: number
    expression: string
    message: string
    onButtonClick?: () => void
}


function ErrorSection({ code, expression, message, onButtonClick }: ErrorSectionProps) {
    return (
        <Grid className="errorSection">
            <Grid className="errorContent">
                <ErrorCodes code={code} />
                <ErrorExpression expression={expression} />
                <ErrorDescription message={message} />
            </Grid>
            <Grid className="errorButtonSection">
                <ErrorButton onButtonClick={onButtonClick} />
            </Grid>
        </Grid>
    )
}

export default ErrorSection