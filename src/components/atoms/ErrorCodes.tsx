import { Typography } from "@mui/material";

type ErrorCodesProps = {
    code: number
}


function ErrorCodes({ code }: ErrorCodesProps) {
    return (
         <Typography variant="h1" className="errorCodes">
            {code}
         </Typography>
    )
}


export default ErrorCodes;