import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Buscar una película..."
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Controlamos el input
            />
            <button type="submit">🔍 Buscar</button>
        </form>
    );
}

export default SearchBar;
