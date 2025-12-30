import { createContext, useState, useEffect, useContext } from "react";

const WatchlistContext = createContext();

export default WatchlistContext;

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState(() => {
        const saved = localStorage.getItem('cinescope_watchlist');
        const initial = saved ? JSON.parse(saved) : [];
        return initial;
    });

    useEffect(() => {
        localStorage.setItem('cinescope_watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (movie) => {
        if (watchlist.some((m) => m.id === movie.id)) {
            return;
        }
        setWatchlist((prev) => [...prev, movie]);
    };

    const removeFromWatchlist = (movieId) => {
        setWatchlist((prev) => prev.filter((m) => m.id !== movieId));
    };

    const isInWatchlist = (movieId) => watchlist.some((m) => m.id === movieId);

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    );
}

export const useWatchlist = () => useContext(WatchlistContext);