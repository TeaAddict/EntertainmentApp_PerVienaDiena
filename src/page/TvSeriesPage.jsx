import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoundSection from "../components/FoundSection";
import ContentSection from "../components/ContentSection";
import { useSearchParams } from 'react-router';

const TvSeriesPage = ({ movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  const categoryMovies = movies?.filter(
    (movie) => movie.category == "TV Series"
  );
  let filteredMovies = [];

  if (searchValue.length > 2) {
    filteredMovies = categoryMovies?.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.3rem] md:gap-0 mr-[1rem] ml-[1rem] md:mr-[1.5rem] md:ml-[1.56rem]v desktop:mr-[2.25rem] desktop:ml-0">
      <div className="mt-[1.5rem] md:my-[2.125rem] ml-[1rem] md:ml-[1.56rem] desktop:mt-[4.06rem] desktop:ml-0">
        <SearchBar
          placeholderText="Search for TV series"
          value={searchValue}
          setSearchParams={setSearchParams}
        />
      </div>
      {searchValue.length > 2 ? (
        <FoundSection movies={filteredMovies} searchText={searchValue} />
      ) : (
        <ContentSection movies={categoryMovies} heading={"TV Series"} />
      )}
    </div>
  );
};
export default TvSeriesPage;
