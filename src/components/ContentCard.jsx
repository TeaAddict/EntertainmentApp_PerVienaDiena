import { updateMovie } from "../helpers/movies/put";
import { useState } from "react";

export default function ContentCard({ content }) {
  const [isBookmarked, setIsBookmarked] = useState(content.isBookmarked);

  const handleBookmarkToggle = async () => {
    try {
      await updateMovie(content.id, { isBookmarked: !isBookmarked });
      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updatedSrc = (imgString) => {
    return `src/${imgString.substring(1)}`;
  };

  const style = {
    trending: {
      container:
        "absolute bottom-0 left-0 p-4 md:p-[25px] from-black pb-[16px] md:pb-[21px]",
      description:
        "text-[12px] leading-[15px] md:text-body-m md:pb-[2px] md:gap-[5px]",
      title: "md:text-heading-s ",
      imgSize: "w-[240px] h-[140px]  md:w-[470px] md:h-[230px]",
    },
    regular: {
      container: "w-full pt-3 pt-[6px] ",
      description: "text-[11px] gap-[9px]",
      title: "text-[14px]  md:text-[heading-xs] md:pt-[1px] md:pl-[2px]",
      imgSize:
        "min-w-[10.25rem] min-h-[6.875rem] md:min-w-[13.75rem] md:min-h-[8.75rem] desktop:min-w-[280px] desktop:min-h-[174px]",
    },
  };
  return (
    <div className="items-center bg-movie-secondary">
      <div className="relative">
        {/* Image */}
        <div className="group relative">
          <img
            className={`object-cover rounded-[9px] hover:bg-movie-second ${
              content.isTrending
                ? style.trending.imgSize
                : style.regular.imgSize
            }`}
            src={updatedSrc(
              content.isTrending
                ? content.thumbnail.trending.large
                : content.thumbnail.regular.large
            )}
            alt=""
          />
          {/* Play Button */}
          <div className="absolute inset-0 hidden desktop:group-hover:flex items-center justify-center opacity-0 desktop:hover:opacity-100 bg-opacity-50 bg-black transition">
            <button className="bg-white bg-opacity-25 text-white rounded-full p-2 flex items-center space-x-2">
              <img src="src/assets/icon-play.svg" alt="Play icon" />
              <p className="text-heading-xs pl-2 pr-4">Play</p>
            </button>
          </div>
        </div>
        {/* bookmark */}
        <div className="group">
          <button
            className="absolute top-[8px] right-[8px] md:top-[16px] md:right-[16px] w-8 h-8 bg-movie-secondary bg-opacity-50 rounded-full flex items-center justify-center hover:bg-movie-fifth transition"
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
        {/* Description and Title */}
        <div
          className={`pt-[9px] ${
            content.isTrending
              ? style.trending.container
              : style.regular.container
          }`}
        >
          <p
            className={`text-[12px] font-thin text-white flex items-center ${
              content.isTrending
                ? style.trending.description
                : style.regular.description
            }`}
          >
            <span>{content.year}</span>
            <span>•</span>
            <img
              src={`src/assets/icon-category-${
                content.category === "Movie" ? "movie" : "tv"
              }.svg`}
              className="inline-block w-[13px] h-[13px]"
            />
            <span>{content.category}</span>
            <span>•</span>
            <span>{content.rating}</span>
          </p>
          <h5
            className={`text-body-m text-white font-heavy ${
              content.isTrending ? style.trending.title : style.regular.title
            }`}
          >
            {content.title}
          </h5>
        </div>
      </div>
    </div>
  );
}
