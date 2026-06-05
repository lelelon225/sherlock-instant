import axios from 'axios'

const BASE_URL_v3 = 'https://api.themoviedb.org/3'
const BASE_URL_v4 = 'https://api.themoviedb.org/4'


const api_v4 = axios.create({
    baseURL: BASE_URL_v4,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/json',
    },
})

const api = axios.create({
    baseURL: BASE_URL_v3,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        Accept: 'application/json',
    },
})



export type ApiError = {
    code: number
    expression: string
    message: string
    raw?: unknown
}

function normalizeApiError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            const code = error.response.status ?? 0
            const expression = error.response.statusText || 'Request Failed'
            const message =
                error.response.data?.status_message ||
                error.response.data?.error ||
                error.message ||
                'Request failed.'

            return { code, expression, message, raw: error }
        }

        if (error.request) {
            return {
                code: 0,
                expression: 'Network Error',
                message: 'No response received from the server.',
                raw: error,
            }
        }

        return {
            code: 0,
            expression: 'Request Error',
            message: error.message || 'Request failed to start.',
            raw: error,
        }
    }

    if (error instanceof Error) {
        return { code: 0, expression: 'Unexpected Error', message: error.message, raw: error }
    }

    return { code: 0, expression: 'Unexpected Error', message: 'An unexpected error occurred.', raw: error }
}

api_v4.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(normalizeApiError(error))
)
api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(normalizeApiError(error))
)



export default api
export { api_v4 }