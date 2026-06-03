import {  Typography } from "@mui/material"

type ErrorExpressionProps = {
    expression: string
}

function ErrorExpression({ expression }: ErrorExpressionProps) {
    return (
        <Typography variant="h2">{expression}</Typography>
    )
}

export default ErrorExpression