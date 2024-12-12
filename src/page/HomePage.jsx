import { useState } from "react";
import RecomendedSection from "../components/RecomendedSection";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import FoundSection from "../components/FoundSection";

const HomePage = ({ movies }) => {
  const [searchText, setSearchText] = useState("");

  const trendingMovies = movies.filter((movie) => movie.isTrending);

  console.log("Search val: ", searchText);

  if (!movies) return <p>Loading data...</p>;
  if (searchText) return <FoundSection />;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.5rem] md:gap-0">
      <div className="mt-[1.4rem]  md:my-[1.99rem]">
        <SearchBar
          placeholderText="Search for movies or TV series"
          setValue={setSearchText}
        />
      </div>
      <div className="md:mb-[2.44rem]">
        <Trending data={trendingMovies} />
      </div>
      <RecomendedSection movies={movies} />
    </div>
  );
};
export default HomePage;
