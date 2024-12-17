import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoundSection from "../components/FoundSection";
import ContentSection from "../components/ContentSection";
import { useSearchParams } from 'react-router';

const BookmarkPage = ({ movies }) => {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('serach') || "";

  const content = movies?.filter(
    (movie) => movie.isBookmarked && movie.isTrending == false
  );
  let filteredMovies = [];

  if (searchText.length > 2) {
    filteredMovies = content?.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.5rem] md:gap-0">
      <div className="mt-[1.4rem]  md:my-[1.99rem]">
        <SearchBar
          placeholderText="Search for bookmarked shows"
          setValue={setSearchText}
          setSearchParams={setSearchParams}
        />
      </div>
      {searchValue.length > 2 ? (
        <FoundSection movies={filteredMovies} searchText={searchValue} />
      ) : (
        <ContentSection movies={content} heading={"Bookmarked Movies"} />
      )}
    </div>
  );
};
export default BookmarkPage;
