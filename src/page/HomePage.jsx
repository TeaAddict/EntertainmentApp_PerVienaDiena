import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import FoundSection from "../components/FoundSection";
import ContentSection from "../components/ContentSection";
import { useSearchParams } from "react-router";

const HomePage = ({ movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  const trendingMovies = movies?.filter((movie) => movie.isTrending);

  let filteredMovies = [];

  if (searchValue.length > 2) {
    filteredMovies = movies?.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue?.toLowerCase())
    );
  }

  // if (user.role == "") navigate("/login");

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.5rem] md:gap-0">
      <div className="mt-[1.5rem] md:my-[2.125rem]">
        <SearchBar
          placeholderText="Search for movies or TV series"
          value={searchValue}
          setSearchParams={setSearchParams}
        />
      </div>
      {searchValue.length > 2 ? (
        <FoundSection movies={filteredMovies} searchText={searchValue} />
      ) : (
        <div>
          <div className="mb-[22px] md:mb-[2.44rem]">
            <Trending data={trendingMovies} />
          </div>
          <ContentSection movies={movies} heading={"Recommended for you"} />
        </div>
      )}
    </div>
  );
};
export default HomePage;
