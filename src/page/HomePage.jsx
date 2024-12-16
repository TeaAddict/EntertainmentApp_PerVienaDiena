import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import FoundSection from "../components/FoundSection";
import ContentSection from "../components/ContentSection";

const HomePage = ({ movies }) => {
  const [searchText, setSearchText] = useState("");

  const trendingMovies = movies.filter((movie) => movie.isTrending);
  const notTrendingMovies = movies.filter((movie) => movie.isTrending == false);

  let filteredMovies = [];

  if (searchText.length > 2) {
    filteredMovies = notTrendingMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.5rem] md:gap-0">
      <div className="mt-[1.4rem]  md:my-[1.99rem]">
        <SearchBar
          placeholderText="Search for movies or TV series"
          setValue={setSearchText}
        />
      </div>
      {searchText.length > 2 ? (
        <FoundSection movies={filteredMovies} searchText={searchText} />
      ) : (
        <div>
          <div className="md:mb-[2.44rem]">
            <Trending data={trendingMovies} />
          </div>
          <ContentSection movies={movies} heading={"Recommended for you"} />
        </div>
      )}
    </div>
  );
};
export default HomePage;
