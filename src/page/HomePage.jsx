import Header from "../components/Header";
import Trending from "../components/Trending";
import Recommended from "../components/ Recommended";
import Searchbar from "../components/Searchbar";

const Homepage = () => {
  return (
    <div className="bg-gray-900  desktop:bg-movie-secondary text-white min-h-screen flex flex-col  md:flex-col overflow-x-auto md:items-center md:px-[1.5625rem] md:py-[1.5625rem] desktop:items-start desktop:px-[2rem] desktop:py-[2rem] desktop:flex-row">
      {/* Sidebar Header */}
      <div>
        <Header />
      </div>
      {/* Main Content */}
      <div className="mt-[1rem] flex-1 flex flex-col items-start justify-start md:mt-[1.5rem] desktop:ml-[-0.35rem] desktop:w-full">
        {/* Searchbar */}
        <div className="mx-[1rem] mb-[-1.25rem] w-full max-w-[calc(100%-2rem)] md:mb-[0.3rem] md:items-start desktop:mb-[0.375rem] md:px-[25px] ">
          <Searchbar />
        </div>
        {/* Trending */}
        <div className="mx-[1rem] mb-[-0.5rem] w-full max-w-[calc(100%-2rem)] md:mb-[0.9rem] md:w-[768px] desktop:w-[1440px] md:px-[25px] ">
          <Trending />
        </div>
        {/* Recommended */}
        <div className="mx-[1rem] mb-[1rem] w-full max-w-[calc(100%-2rem)] md:w-[768px] desktop:w-[1440px] md:px-[25px]">
          <Recommended />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
