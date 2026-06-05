import { getPopularMovies } from "../../service/MovieService";
import type { ApiError } from "../../service/Api";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import type { InstanceEntity, ResultsEntity } from "../../service/MovieService";
import MovieCard from "../molecules/MovieCard";



function ListPopular() {
    const navigate = useNavigate();
    const [cards, setCards] = useState<ResultsEntity[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [language, setLanguage] = useState<string | "en-US">("en-US");
    const [sessionData, setSessionData] = useState<InstanceEntity | null>(null);

    const loadData = useCallback(async (page: number, lang: string) => {
        try {
            const data = await getPopularMovies(page, language);
            setCards(data.results || []);
            console.log(data);
            setLanguage(lang);
            setSessionData(data);
        } catch (error) {
            const apiError = error as ApiError;
            navigate("/error", { state: apiError });
        }
    }, [navigate, language]);


    useEffect(() => {
        loadData(currentPage, language);
    }, [currentPage, language, loadData]);

    return (
        <Grid container spacing={2} className="listPopularContainer">
            {cards.map((card) => (
                <Grid key={card.id}>
                    <MovieCard movie={card} />
                </Grid>
            ))}
            <Pagination
                count={sessionData?.total_pages || 1}
                page={currentPage}
                onChange={(event, page) => setCurrentPage(page)}
            />
        </Grid>
        
    )
}

export default ListPopular;