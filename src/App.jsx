import { Route, Routes } from "react-router";
import "./App.css";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import TvSeriesPage from "./page/TvSeriesPage";
import MoviesPage from "./page/MoviesPage";
import BookmarkPage from "./page/BookmarkPage";
import HomePage from "./page/HomePage";
import { useEffect, useState } from "react";
import { getMovies } from "./helpers/movies/get";
import Main from "./components/Main";
import { useUpdate } from "./components/Context/UpdateContext";
import ErrorPage from "./page/ErrorPage";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { updateCount } = useUpdate();

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
  }, [updateCount]);

  if (loading) {
    return (
      <ErrorPage
        text={
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        }
      />
    );
  }
  if (error) {
    return <ErrorPage text="Something went wrong..." displayButton={true} />;
  }


  return (
    <div className="font-outfit min-h-[100vh] bg-movie-secondary">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<Main />}>
          <Route index element={<HomePage movies={data} />} />
          <Route path="/tv-series" element={<TvSeriesPage movies={data} />} />
          <Route path="/movies" element={<MoviesPage movies={data} />} />
          <Route path="/bookmarks" element={<BookmarkPage movies={data} />} />
        </Route>
        <Route
          path="*"
          element={
            <ErrorPage text="404 - Page Not Found" displayButton={true} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
