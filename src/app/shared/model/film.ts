export interface Genres{
    name: string;
    id: number;
}
export interface ResponseGenres {
    genres: Genres[];
}
export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
    homepage: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime: number;
    name: string;
    production_countries: Genre[];
}
export interface Genre {
    name: string;
    id: number;
}
export interface ResponseMovies {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
export class Movie {
    key: string;
}
