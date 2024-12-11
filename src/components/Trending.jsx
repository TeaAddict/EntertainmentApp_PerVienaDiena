// import bookmark from "../assets/icon-bookmark-empty.svg";
// import tv from "../assets/icon-category-tv.svg";
// import movie from "../assets/icon-category-movie.svg";
import ContentCard from "./ContentCard";

const Trending = ({ data }) => {
  return (
    <section className=" bg-movie-secondary text-white py-11 sm:py-11">
      <h1 className="text-[1.3rem] sm:text-[1.91rem] lg:text-[1.91rem] mb-[1.02rem] sm:mt-[-0.31rem] sm:mb-[1.31rem] ">
        Trending
      </h1>
      <div className="flex gap-4 sm:gap-10 lg:gap-10 overflow-auto">
        {data.map((item) => (
          <div
            key={item.title}
            className="relative flex-shrink-0 rounded-lg overflow-hidden h-[8.75rem] sm:h-[14.375rem] lg:h-[14.375rem]"
          >
            <ContentCard content={item} key={item.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
