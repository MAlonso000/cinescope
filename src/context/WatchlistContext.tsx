import { createContext, useState, useEffect, useContext } from "react";
import { Movie } from "../types/movie";
import { WatchlistContextType } from "../types/context";

const WatchlistContext = createContext<WatchlistContextType | null>(null);

export const WatchlistProvider = ({ children }: { children: React.ReactNode }) => {
    const [watchlist, setWatchlist] = useState(() => {
        const saved = localStorage.getItem('cinescope_watchlist');
        const initial = saved ? JSON.parse(saved) : [];
        return initial;
    });

    useEffect(() => {
        localStorage.setItem('cinescope_watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (movie: Movie) => {
        if (watchlist.some((m: Movie) => m.id === movie.id)) {
            return;
        }
        setWatchlist((prev: Movie[]) => [...prev, movie]);
    };

    const removeFromWatchlist = (movieId: number) => {
        setWatchlist((prev: Movie[]) => prev.filter((m: Movie) => m.id !== movieId));
    };

    const isInWatchlist = (movieId: number) => watchlist.some((m: Movie) => m.id === movieId);

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    );
}

export const useWatchlist = () => {
    const context = useContext(WatchlistContext);
    if (!context) {
        throw new Error("useWatchlist must be used within a WatchlistProvider");
    }
    return context;
};

export default WatchlistContext;