import { Grid } from "@mui/material"
import { Typography } from "@mui/material"

type ErrorTemplateProps = {
    code: number
    expression: string
    message: string
    buttonText?: string
}

function ErrorTemplate({ code, expression, message }: ErrorTemplateProps) {
  return (
    <Grid container spacing={2} className="errorContainer">
      <Grid>
        <Typography variant="h1">{code}</Typography>
        <Typography variant="h1">{expression}</Typography>
        <Typography variant="body1">{message}.</Typography>
      </Grid>
    </Grid>

  )
}

export default ErrorTemplate