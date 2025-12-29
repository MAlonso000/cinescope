import React from "react";

const MovieCard = ({ movie }) => {

    // const year = movie.releaseDate.split('-')[0];

    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w1280/";

    return (
        <div className="movie-card">
            {/* 1. Renderizado condicional para la imagen */}
            {movie.posterPath ? (
                <img
                    src={`${IMAGE_BASE_URL}${movie.posterPath}`}
                    alt={movie.title}
                    className="movie-poster"
                    width="200"
                />
            ) : (
                <div className="placeholder-poster">No Poster</div>
            )}

            <div className="info">
                <h3>{movie.title}</h3>
                <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} width="200" />
                <p>{movie.release_date}</p>
                <p>⭐ {movie.vote_average.toFixed(2)}</p>
                <button>Ver Detalle</button>
            </div>
        </div>
    );
}

export default MovieCard;