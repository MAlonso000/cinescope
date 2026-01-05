import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import NavBar from "./components/NavBar";
import { WatchlistProvider } from "./context/WatchlistContext";

function App() {

  return (
    <WatchlistProvider>
      <BrowserRouter>
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </WatchlistProvider>
  );
}
export default App;