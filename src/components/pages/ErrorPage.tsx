import { useLocation } from "react-router-dom"
import ErrorTemplate from "../templates/ErrorTemplate"
import type { ApiError } from "../../service/Api"

type ErrorPageState = Partial<ApiError> | null

function ErrorPage() {
    const location = useLocation()
    const state = location.state as ErrorPageState

    const code = typeof state?.code === "number" ? state.code : 500
    const expression = typeof state?.expression === "string" ? state.expression : "Error"
    const message = typeof state?.message === "string" ? state.message : "Something went wrong."

  return <ErrorTemplate code={code} expression={expression} message={message} />
}

export default ErrorPage
