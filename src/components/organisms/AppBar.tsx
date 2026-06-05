import { AppBar as MuiAppBar} from "@mui/material";
import AppBarHeading from "../atoms/AppBarHeading";

type AppBarProps = {
    title: string
}

function AppBar({ title }: AppBarProps) {
    return (
        <MuiAppBar position="static" color="primary" className="appBar">
            <AppBarHeading>{title}</AppBarHeading>
        </MuiAppBar>
    )
}

export default AppBar