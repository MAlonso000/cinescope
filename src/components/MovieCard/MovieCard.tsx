import { Movie } from "@/types/movie";
import { useWatchlist } from "@/context/WatchlistContext";
import { Link } from "react-router-dom";
import { formatRating } from "@/utils/movieUtils";

const MovieCard = ({ movie }: { movie: Movie }) => {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

    const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

    return (
        <div className="movie-card">
            <div className="info">
                <h3>{movie.title}</h3>
                <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} width="200" />
                <p>{movie.release_date}</p>
                <p>{formatRating(movie.vote_average || 0)}</p>
                {isInWatchlist(movie.id) ? (
                    <button onClick={() => removeFromWatchlist(movie.id)}>Quitar de la lista</button>
                ) : (
                    <button onClick={() => addToWatchlist(movie)}>Agregar a la lista</button>
                )}
                <Link to={`/movie/${movie.id}`}>Ver Detalle</Link>
            </div>
        </div>
    );
};

export default MovieCard;
