import { Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./page/Homepage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import TvSeriesPage from "./page/TvSeriesPage";
import MoviesPage from "./page/MoviesPage";
import BookmarkPage from "./page/BookmarkPage";
import ContentCard from "./components/ContentCard";

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
      <div className="p-5">
        {/* <ContentCard type="TV Series"></ContentCard> */}
        <ContentCard type="Movie"></ContentCard>
        {/* <ContentCard trending={true}></ContentCard> */}
      </div>
    </div>
  );
}

export default App;
