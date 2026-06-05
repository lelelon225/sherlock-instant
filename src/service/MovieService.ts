import api from './Api'
import api_v4 from '../service/Api';
const ACCOUNT_ID = import.meta.env.VITE_ACCOUNT_ID;

export type InstanceEntity = {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
}
export type ResultsEntity = {
    adult: boolean;
    backdrop_path: string;
    genre_ids?: (number)[] | null;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    softcore: boolean;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export async function getMovieRecommendations(page?: number, language?: string): Promise<InstanceEntity> {
    const accountId = ACCOUNT_ID;
    const response = await api_v4.get<InstanceEntity>(`/account/${accountId}/movie/recommendations`, {
        params: { page, language },
    })
    return response.data
}

export async function getPopularMovies(page: number, language: string): Promise<InstanceEntity> {
    const response = await api.get<InstanceEntity>("/discover/movie", {
        params: { page, language, sort_by: "popularity.desc" },
    })
  return response.data
}