import api from "./api";
import { Movie, MovieResponse } from "../types/movie";

export const fetchPopularMovies = async (): Promise<Movie[]> => {
    try {
        const response = await api.get<MovieResponse>("/movie/popular");
        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
}

export const fetchMovieDetails = async (id: number): Promise<Movie | null> => {
    try {
        const response = await api.get<Movie>(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return null;
    }
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
    try {
        const response = await api.get<MovieResponse>(`/search/movie?query=${query}`);
        return response.data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
}