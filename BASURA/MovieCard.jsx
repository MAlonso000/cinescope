import React from "react";
import WatchlistContext from "../src/context/WatchlistContext";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {

    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w1280/";

    const { isInWatchlist, addToWatchlist, removeFromWatchlist } = React.useContext(WatchlistContext);

    return (
        <div className="movie-card">
            <div className="info">
                <h3>{movie.title}</h3>
                <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} width="200" />
                <p>{movie.release_date}</p>
                <p>⭐ {(movie.vote_average || 0).toFixed(2)}</p>
                {isInWatchlist(movie.id) ? (
                    <button onClick={() => removeFromWatchlist(movie.id)}>Quitar de la lista</button>
                ) : (
                    <button onClick={() => addToWatchlist(movie)}>Agregar a la lista</button>
                )}
                <Link to={`/movie/${movie.id}`}>Ver Detalle</Link>
            </div>
        </div>
    );
}

export default MovieCard;