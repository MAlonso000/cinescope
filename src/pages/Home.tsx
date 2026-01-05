import React, { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard";
import { fetchPopularMovies, searchMovies } from "@/services/tmdbService";
import SearchBar from "@/components/SearchBar";
import { Movie } from "@/types/movie";

function Home() {

    const [watchlist, setWatchlist] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const initialMovie = watchlist.find((movie: Movie) => movie.id === 101);

    const handleAddMovie = (movie: Movie | undefined) => {
        if (movie) {
            setWatchlist([...watchlist, movie]);
        }
    };

    const handleRemoveMovie = (id: number) => {
        setWatchlist(watchlist.filter((movie: Movie | undefined) => movie?.id !== id));
    };

    const handleSearch = async (query: string) => {
        setLoading(true);
        setError(null);
        try {
            const movies = await searchMovies(query);
            setWatchlist(movies);
            setLoading(false);
        } catch (error) {
            setError(error as string);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const loadMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                // Use the function that calls axios with the token
                const movies = await fetchPopularMovies();
                setWatchlist(movies);
                setLoading(false);
            } catch (error) {
                setError(error as string);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadMovies();
    }, []);

    return (
        <div className="App">
            <SearchBar onSearch={handleSearch} />
            <h2> Películas populares</h2>
            <div className="movie-grid">
                {loading ? (
                    <p>Loading...</p>
                ) : watchlist.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <button onClick={() => handleAddMovie(initialMovie)}>Add Movie</button>
            <button onClick={() => handleRemoveMovie(initialMovie!!.id)}>Remove Movie</button>
        </div>
    );
}

export default Home;
