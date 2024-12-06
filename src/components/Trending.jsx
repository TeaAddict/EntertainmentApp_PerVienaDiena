import data from "../data/data.json";
import bookmark from "../assets/icon-bookmark-empty.svg";
import tv from "../assets/icon-category-tv.svg";
import movie from "../assets/icon-category-movie.svg";

const Trending = () => {
  const trendingItems = data.filter((item) => item.isTrending);

  return (
    <section className="bg-movie-secondary text-white py-11 px-5 sm:py-11">
      <h1 className="text-[1.3rem] sm:text-[1.91rem] lg:text-[1.91rem] mb-[1.02rem] sm:mt-[-0.31rem] sm:mb-[1.31rem] ">
        Trending
      </h1>
      <div className="flex gap-4 sm:gap-10 lg:gap-10 overflow-auto ">
        {trendingItems.map((item) => (
          <div
            key={item.title}
            className="relative flex-shrink-0 rounded-lg overflow-hidden h-[8.75rem] sm:h-[14.375rem] lg:h-[14.375rem]"
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={item.thumbnail.trending.small}
              />
              <img
                className="w-[15rem] sm:w-[29.375rem] lg:w-[29.375rem]"
                src={item.thumbnail.trending.large}
                alt={item.title}
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent py-3 px-4 sm:py-5 sm:px-6 lg:py-4 lg:px-6 flex flex-col justify-end ">
              <div className=" text-xs sm:text-[0.9375rem] opacity-75 flex items-center gap-[0.37rem] sm:gap-[0.4rem] lg:gap-[0.4rem]">
                <span>{item.year}</span>
                <span className="px-[0.06rem]">•</span>
                <span>
                  {item.category === "Movie" ? (
                    <img src={movie} alt="Movie" />
                  ) : (
                    <img src={tv} alt="TV Series" />
                  )}
                </span>
                <span>{item.category}</span>
                <span className="px-[0.2rem] sm:px-[0.06rem] lg:px-[0.06rem]">•</span>
                <span>{item.rating}</span>
              </div>
              <h3 className="px-[0.0rem] pb-[0.25rem] text-[0.9375rem] sm:text-[1.5rem]">
                {item.title}
              </h3>
            </div>
            <button
              className="absolute top-[0.4rem] right-[0.7rem] sm:right-[1.63rem] sm:top-[1.08rem] bg-black bg-opacity-50 rounded-full p-2"
              aria-label={`Bookmark ${item.title}`}
            >
              <img src={bookmark} alt="Bookmark" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
