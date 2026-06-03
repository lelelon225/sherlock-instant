import { AppBar as MuiAppBar} from "@mui/material";

function AppBar() {
    return (
        <MuiAppBar position="static" color="primary" className="appBar">
            <h1>Sherlock Instant</h1>
        </MuiAppBar>
    )
}

export default AppBar