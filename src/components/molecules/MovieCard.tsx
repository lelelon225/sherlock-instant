import { Card, CardContent } from "@mui/material"
import MovieCardImage from "../atoms/MovieCardImage"
import type { ResultsEntity } from "../../service/MovieService"

type MovieCardProps = {
    movie: ResultsEntity
}


function MovieCard({ movie }: MovieCardProps) {
    return (
        <Card className="movieCard">
            <CardContent>
                <MovieCardImage
                    imageUrl={movie.poster_path}
                    title={movie.title}
                />
            </CardContent>
        </Card>
    )
}

export default MovieCard