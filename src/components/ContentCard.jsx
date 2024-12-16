import { updateMovie } from "../helpers/movies/put";
import { useState } from "react";
import { useUpdate } from "./Context/UpdateContext";
export default function ContentCard({ content }) {
  const [isBookmarked, setIsBookmarked] = useState(content.isBookmarked);
  const { update } = useUpdate();

  const handleBookmarkToggle = async () => {
    try {
      await updateMovie(content.id, { isBookmarked: !isBookmarked });
      setIsBookmarked(!isBookmarked);
      update();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updatedSrc = (imgString) => {
    return `src/${imgString.substring(1)}`;
  };

  return (
    <div className="items-center bg-movie-secondary">
      <div className="relative">
        {/* Image */}
        <div>
          <div className="flex">
            <div
              className="min-w-[10.25rem] min-h-[6.875rem] md:min-w-[13.75rem] md:min-h-[8.75rem] 
              desktop:min-w-[280px] desktop:min-h-[174px] img-background "
            >
              <img
                className="block object-contain rounded-[9px] hover:bg-movie-second w-[100%]"
                src={updatedSrc(content.thumbnail.regular.large)}
                alt=""
              />
            </div>
          </div>
          {/* Play Button */}
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 bg-black transition">
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
        <div className="w-full pt-[5px] ">
          <p className="font-thin text-white flex items-center text-[11px] desktop:text-body-s pb-[1px]">
            <span className="pr-[8px]">{content.year}</span>
            <span className="pr-[8px]">•</span>
            <img
              src={`src/assets/icon-category-${
                content.category === "Movie" ? "movie" : "tv"
              }.svg`}
              className="inline-block w-[13px] h-[13px] mr-[5px]"
            />
            <span className="pr-[8px]">{content.category}</span>
            <span className="pr-[8px]">•</span>
            <span>{content.rating}</span>
          </p>

          <h5 className="text-body-m text-white desktop:text-heading-xs">
            {content.title}
          </h5>
        </div>
      </div>
    </div>
  );
}
