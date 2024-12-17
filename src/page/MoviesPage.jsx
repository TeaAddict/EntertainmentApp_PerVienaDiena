import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoundSection from "../components/FoundSection";
import ContentSection from "../components/ContentSection";
import { useSearchParams } from 'react-router';
const MoviesPage = ({ movies }) => {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  const categoryMovies = movies?.filter((movie) => movie.category == "Movie");
  let filteredMovies = [];

  if (searchText.length > 2) {
    filteredMovies = categoryMovies?.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue?.toLowerCase())
    );
  }

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.3rem] md:gap-0">
      <div className="mt-[1.4rem]  md:my-[1.99rem]">
        <SearchBar
          placeholderText="Search for movies"
          setValue={setSearchText}
          setSearchParams={setSearchParams}
        />
      </div>
      {searchValue.length > 2 ? (
        <FoundSection movies={filteredMovies} searchText={searchValue} />
      ) : (
        <ContentSection movies={categoryMovies} heading={"Movies"} />
      )}
    </div>
  );
};
export default MoviesPage;
