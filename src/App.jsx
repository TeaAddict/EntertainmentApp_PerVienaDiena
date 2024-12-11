import { Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./page/Homepage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import TvSeriesPage from "./page/TvSeriesPage";
import MoviesPage from "./page/MoviesPage";
import BookmarkPage from "./page/BookmarkPage";

import ContentCard from "./components/ContentCard";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/data/data.json");
        const jsonData = await response.json();
        setData(jsonData);
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

  return (
    <div className="font-outfit">
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tv-series" element={<TvSeriesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
      </Routes>
      <div className="justify-self-center">
        {
          data.map((content, index) => (
            // !content.isTrending && (
            <div key={content.title}>
              <ContentCard content={content} index={index}></ContentCard>
            </div>
          ))
          // )
        }
      </div>
    </div>
  );
}

export default App;
