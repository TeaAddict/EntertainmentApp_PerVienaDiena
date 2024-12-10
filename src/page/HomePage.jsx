import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

const Homepage = () => {
  return (
    <div className="bg-movie-secondary h-[100vh]">
      Homepage
      <SearchBar text="Search for movies or TV series" />
      <Button>TEST</Button>
    </div>
  );
};

export default Homepage;
