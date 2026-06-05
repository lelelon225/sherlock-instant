import { Grid } from "@mui/material"
import MovieCardTitle from "./MovieCardTitle"



type MovieCardProps = {
    imageUrl?: string
    title?: string
}

function MovieCardImage({ imageUrl, title}: MovieCardProps) {
    return (
        <Grid container className="movieCardImageContainer">
            <Grid>
                <img src={imageUrl}  className="movieCardImage" />
            </Grid>
            <MovieCardTitle title={title} />
        </Grid>
    )
}

export default MovieCardImage