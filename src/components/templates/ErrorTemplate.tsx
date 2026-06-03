import { Grid } from "@mui/material"
import ErrorSection from "../organisms/ErrorSection"
import { useNavigate } from "react-router-dom"

type ErrorTemplateProps = {
    code: number
    expression: string
    message: string
}

function ErrorTemplate({ code, expression, message }: ErrorTemplateProps) {
  const navigate = useNavigate()

  return (
    <Grid container spacing={2} className="errorContainer">
      <ErrorSection code={code} expression={expression} message={message} onButtonClick={() => navigate('/')} />
    </Grid>

  )
}

export default ErrorTemplate