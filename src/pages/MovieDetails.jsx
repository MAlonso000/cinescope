import React, { useState, useEffect } from "react";
import { useWatchlist } from "../context/WatchlistContext";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/tmdbService";

const MovieDetails = () => {
    const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w1280/";

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieDetails(id);
                setMovie(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getMovieDetails();
    }, [id]);

    if (loading) return <div>Cargando detalles...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!movie) return <div>No se encontró la película</div>;

    return (
        <div className="movie-details">
            <div className="movie-details-header">
                <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-details-poster"
                    width="200"
                />

                <div className="movie-details-info">
                    <h2>{movie.title}</h2>
                    {isInWatchlist(movie.id) ? (
                        <button onClick={() => removeFromWatchlist(movie.id)}>Quitar de la lista</button>
                    ) : (
                        <button onClick={() => addToWatchlist(movie)}>Agregar a la lista</button>
                    )}
                    <p className="tagline"><em>{movie.tagline}</em></p>
                    <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
                    <p><strong>Puntuación:</strong> ⭐ {movie.vote_average.toFixed(1)}</p>
                    <p><strong>Sinopsis:</strong></p>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;