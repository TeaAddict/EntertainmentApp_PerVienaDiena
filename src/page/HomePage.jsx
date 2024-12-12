import RecomendedSection from "../components/RecomendedSection";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

const HomePage = ({ movies }) => {
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.5rem] md:gap-0">
      <div className="mt-[1.5rem] md:my-[2.06rem]">
        <SearchBar placeholderText="Search for movies or TV series" />
      </div>
      <div className="md:mb-[2.44rem]">
        <Trending data={trendingMovies} />
      </div>
      <RecomendedSection />
    </div>
  );
};
export default HomePage;
