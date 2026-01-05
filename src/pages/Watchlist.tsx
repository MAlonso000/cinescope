import { useWatchlist } from "../context/WatchlistContext";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useMemo, useState } from "react";

const Watchlist = () => {

    const { watchlist } = useWatchlist();
    const [sortByRating, setSortByRating] = useState(false);
    const sortedWatchlist = useMemo(() => {
        console.log("Calcuando ordenación...");
        if (!sortByRating) return watchlist;
        return [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    }, [watchlist, sortByRating]);

    return (
        <div>
            <h2>Watchlist</h2>
            {sortedWatchlist.length > 0 ? (
                <>
                    <button onClick={() => setSortByRating(!sortByRating)}>
                        {sortByRating ? 'Ver original' : 'Ordenar por puntuación'}
                    </button>

                    <div style={{ width: '100%', height: 300, marginBottom: '40px' }}>
                        <h3>Comparativa de Puntuaciones</h3>
                        <ResponsiveContainer>
                            <BarChart data={sortedWatchlist}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="title" hide /> {/* Ocultamos títulos largos para que no se vea feo */}
                                <YAxis domain={[0, 10]} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1f1f1f', border: '1px solid #4da6ff', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: '#4da6ff' }}
                                    cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                                />
                                <Bar dataKey="vote_average" fill="#4da6ff" name="Puntuación" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <ul className="movies-grid">
                        {sortedWatchlist.map(movie => <li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>)}
                    </ul>
                </>
            ) : (
                <p>Tu lista está vacía. ¡Explora y añade algunas películas!</p>
            )}
        </div>
    );
};

export default Watchlist;