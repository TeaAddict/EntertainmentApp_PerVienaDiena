import { Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./page/Homepage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import TvSeriesPage from "./page/TvSeriesPage";
import MoviesPage from "./page/MoviesPage";
import BookmarkPage from "./page/BookmarkPage";

function App() {
  return (
    <div className="font-outfit">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tv-series" element={<TvSeriesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
