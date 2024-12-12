import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoundSection from "../components/FoundSection";
import ContentSection from "../components/ContentSection";

const MoviesPage = ({ movies }) => {
  const [searchText, setSearchText] = useState("");

  const categoryMovies = movies.filter((movie) => movie.category == "Movie");
  let filteredMovies = [];

  if (searchText.length > 2) {
    filteredMovies = categoryMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.5rem] md:gap-0">
      <div className="mt-[1.4rem]  md:my-[1.99rem]">
        <SearchBar
          placeholderText="Search for movies"
          setValue={setSearchText}
        />
      </div>
      {searchText.length > 2 ? (
        <FoundSection movies={filteredMovies} searchText={searchText} />
      ) : (
        <ContentSection movies={categoryMovies} heading={"Movies"} />
      )}
    </div>
  );
};
export default MoviesPage;
