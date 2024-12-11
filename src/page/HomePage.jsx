import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

const Homepage = ({ movies }) => {
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary h-[100vh]">
      <SearchBar text="Search for movies or TV series" />
      <Trending data={trendingMovies} />
      Homepage
    </div>
  );
};
export default Homepage;
