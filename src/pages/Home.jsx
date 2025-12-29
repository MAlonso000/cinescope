import React, { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard";
import { fetchPopularMovies } from "@/services/tmdbService";

function Home() {

    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const initialMovie = watchlist.find(movie => movie.id === 101);

    const handleAddMovie = (movie) => {
        setWatchlist([...watchlist, movie]);
    };

    const handleRemoveMovie = (id) => {
        setWatchlist(watchlist.filter(movie => movie.id !== id));
    };

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
                setError(error.message);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadMovies();
    }, []);

    return (
        <div className="App">
            <h2> Películas populares</h2>
            <div className="movie-grid">
                {loading ? (
                    <p>Loading...</p>
                ) : watchlist.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <button onClick={() => handleAddMovie(initialMovie)}>Add Movie</button>
            <button onClick={() => handleRemoveMovie(initialMovie.id)}>Remove Movie</button>
        </div>
    );
}
export default Home;