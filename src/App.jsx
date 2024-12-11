import { Route, Routes } from "react-router";
import "./App.css";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import TvSeriesPage from "./page/TvSeriesPage";
import MoviesPage from "./page/MoviesPage";
import BookmarkPage from "./page/BookmarkPage";
import Homepage from "./page/HomePage";
import { useEffect, useState } from "react";
import { getMovies } from "./helpers/movies/get";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovies();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data);

  return (
    <div className="font-outfit">
      <Routes>
        <Route path="/" element={<Homepage movies={data} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tv-series" element={<TvSeriesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
      </Routes>

      {/* {data.map((card) => {
        console.log(card);
      })} */}
    </div>
  );
}

export default App;
