import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import NavBar from "./components/NavBar";
import { WatchlistProvider } from "./context/WatchlistContext";
import { useEffect } from "react";

function App() {

  // useEffect(() => {
  //   const checkBackend = async () => {
  //     try {
  //       const res = await fetch("http://localhost:4000/api/health");
  //       const data = await res.json();
  //       console.log("🔌 Conexión con Backend:", data);
  //     } catch (error) {
  //       console.error("Error conectando al backend:", error);
  //     }
  //   };

  //   checkBackend();
  // }, []);

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