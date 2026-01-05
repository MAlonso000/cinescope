import { Movie } from "./movie";

export interface WatchlistContextType {
    watchlist: Movie[];
    addToWatchlist: (movie: Movie) => void;
    removeFromWatchlist: (movieId: number) => void;
    isInWatchlist: (movieId: number) => boolean;
}

