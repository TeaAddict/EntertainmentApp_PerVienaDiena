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

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.5rem] md:gap-0">
      <div className="mt-[1.5rem] md:my-[2.125rem] ml-[1rem] md:ml-[1.56rem] desktop:mt-[4.06rem] desktop:ml-0 ">
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
          <div className="ml-[1rem] md:ml-[1.56rem] desktop:ml-0  ">
            <Trending data={trendingMovies} />
          </div>
          <div className=" mr-[1rem] ml-[1rem] mt-[1.4rem] md:ml-[1.56rem] md:mr-[1.5rem] md:mt-[2.38rem] desktop:ml-0 desktop:mr-[2.25rem] desktop:mt-[2.5rem] ">
            <ContentSection movies={movies} heading={"Recommended for you"} />
          </div>
        </div>
      )}
    </div>
  );
};
export default HomePage;
