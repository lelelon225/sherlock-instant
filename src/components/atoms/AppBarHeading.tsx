import { Typography } from "@mui/material";

type AppBarHeadingProps = {
    children: React.ReactNode
}

function AppBarHeading({ children }: AppBarHeadingProps) {
    return (
        <Typography variant="h1">
            {children}
        </Typography>
    )
}

export default AppBarHeading;