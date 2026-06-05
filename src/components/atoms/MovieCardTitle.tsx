import {Typography} from "@mui/material"

type MovieCardTitleProps = {
    title?: string
}

function MovieCardTitle({ title,  }: MovieCardTitleProps) {
    return (
        <Typography variant="h6" component="h2" className="movieCardTitle">
            {title}
        </Typography>
    )
}


export default MovieCardTitle