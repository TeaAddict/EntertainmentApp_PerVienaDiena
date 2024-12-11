import RecomendedSection from "../components/RecomendedSection";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

const Homepage = ({ movies }) => {
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary">
      <div className="mt-[1.5rem] mb-[2.13rem] desktop:mt-[2rem]">
        <SearchBar text="Search for movies or TV series" />
      </div>
      <Trending data={trendingMovies} />
      <RecomendedSection />
    </div>
  );
};
export default Homepage;
