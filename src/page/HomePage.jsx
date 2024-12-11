import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

const Homepage = () => {
  return (
    <div className="bg-movie-secondary h-[100vh]">
      <SearchBar text="Search for movies or TV series" />
      <Trending />
      Homepage
    </div>
  );
};
export default Homepage;
