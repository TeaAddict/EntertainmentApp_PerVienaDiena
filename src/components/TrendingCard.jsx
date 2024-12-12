import { updateMovie } from "../helpers/movies/put.js";

export default function TrendingCard({ content }) {
  console.log("contentasd", content);

  const handleBookmarkToggle = async (currentStatus) => {
    try {
      await updateMovie(content.id, { isBookmarked: !currentStatus });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const displayBookmark = (isBookmarked, handleBookmarkToggle) => {
    return (
      <div className="group">
        <button
          className="absolute desktop:top-[16px] top-[8px] desktop:right-[24px] right-[8px] w-8 h-8 sm:right-[24px] sm:top-[16px] bg-movie-secondary bg-opacity-50 rounded-full flex items-center justify-center hover:bg-movie-fifth transition"
          onClick={handleBookmarkToggle}
        >
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              strokeWidth="1.5"
              fill={isBookmarked ? "#FFF" : "none"}
              className="group-hover:stroke-movie-secondary"
            />
          </svg>
        </button>
      </div>
    );
  };

  const displayIcon = (category) => {
    return (
      <img
        src={`src/assets/icon-category-${
          category === "Movie" ? "movie" : "tv"
        }.svg`}
        className="inline-block w-[12px] h-[12px]"
        alt={`${category} icon`}
      />
    );
  };
  return (
    <>
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet={`src/${content.thumbnail.trending.small.substring(1)}`}
        />
        <img
          className="w-[15rem] sm:w-[29.375rem] lg:w-[29.375rem]"
          src={`src/${content.thumbnail.trending.large.substring(1)}`}
          alt={content.title}
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent py-[0.9rem] px-4 sm:py-[1.3rem] sm:px-6 lg:py-5 lg:px-[1.5rem] flex flex-col justify-end ">
        <div className="text-xs sm:text-[0.9375rem] opacity-75 flex items-center gap-[0.39rem] sm:gap-[0.4rem] lg:gap-[0.4rem]">
          <span>{content.year}</span>
          <span className="px-[0.1rem] sm:px-[0.04rem]">•</span>
          {displayIcon(content.category)}
          <span>{content.category}</span>
          <span className="px-[0.1rem] sm:px-[0.05rem] ">•</span>
          <span>{content.rating}</span>
        </div>
        <h3 className="relative top-0.5 sm:top-0 text-[0.9375rem] sm:text-[1.5rem]">
          {content.title}
        </h3>
      </div>
      {displayBookmark(content.isBookmarked, handleBookmarkToggle)}
    </>
  );
}
