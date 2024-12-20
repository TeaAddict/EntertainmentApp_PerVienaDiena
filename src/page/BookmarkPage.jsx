import SearchBar from "../components/SearchBar";
import FoundSection from "../components/FoundSection";
import ContentSection from "../components/ContentSection";
import { useSearchParams } from "react-router";
import { useUser } from "../components/Context/UserContext";

const BookmarkPage = ({ movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const { user } = useUser();

  if (!movies || Object.keys(user).length == 0) return <p>Loading data...</p>;
  const content = movies.filter((movie) => user.bookmarks.includes(movie.id));

  let filteredMovies = [];

  let moviesData = content.filter((content) => content.category == "Movie");

  let tvSeriesData = content.filter(
    (content) => content.category == "TV Series"
  );

  if (searchValue.length > 2) {
    filteredMovies = content?.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
  if (content.length === 0)
    return (
      <p className="flex text-[1.2rem] mb-[1.3rem] md:text-[1.91rem] md:mb-[1.2rem] desktop:mb-[1.8rem] text-movie-fifth items-center justify-center h-[80vh]">
        No Bookmarked Movies
      </p>
    );
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.3rem] md:gap-0 mr-[1rem] ml-[1rem] md:mr-[1.5rem] md:ml-[1.56rem] desktop:mr-[2.25rem] desktop:ml-0">
      <div className="mt-[1.5rem] md:my-[2.125rem] desktop:mt-[4.06rem] desktop:ml-0">
        <SearchBar
          placeholderText="Search for bookmarked shows"
          value={searchValue}
          setSearchParams={setSearchParams}
        />
      </div>
      {searchValue.length > 2 ? (
        <FoundSection movies={filteredMovies} searchText={searchValue} />
      ) : (
        <>
          {moviesData.length && (
            <div className=" md:pb-[43px] desktop:pb-[37px]">
              <ContentSection
                movies={moviesData}
                heading={"Bookmarked Movies"}
              />
            </div>
          )}
          {tvSeriesData.length && (
            <div>
              <ContentSection
                movies={tvSeriesData}
                heading={"Bookmarked TV Series"}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default BookmarkPage;
