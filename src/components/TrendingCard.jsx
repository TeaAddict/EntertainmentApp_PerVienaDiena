import { useEffect, useState } from "react";
import { useUpdate } from "./Context/UpdateContext.jsx";
import { useUser } from "./Context/UserContext.jsx";
import addRemoveFromArray from "../helpers/functions/addRemoveFromArray.js";
import { updateUser } from "../helpers/users/post.js";
import MovieFormModal from "./Movie/MovieFormModal.jsx";

export default function TrendingCard({ content }) {
  const [isBookmarked, setIsBookmarked] = useState(content.isBookmarked);
  const { update } = useUpdate();
  const { user, setUser } = useUser();

  const handleBookmarkToggle = async () => {
    try {
      const newBookmarkIds = addRemoveFromArray(user.bookmarks, content.id);
      setUser({ ...user, bookmarks: newBookmarkIds });
      await updateUser(user.id, { bookmarks: newBookmarkIds });
      setIsBookmarked(!isBookmarked);
      update();
    } catch (error) {
      console.error("Error:", error);
    }
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

  const formatPath = (path) => {
    if (path.includes("http")) {
      return path;
    } else {
      return `src/${path.substring(1)}`;
    }
  };

  useEffect(() => {
    if (user) setIsBookmarked(user?.bookmarks?.includes(content.id));
  }, [user]);

  return (
    <div>
      <div className="relative">
        <div className="group relative">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={formatPath(content.thumbnail.regular.large)}
            />
            <img
              className="w-[15rem] md:w-[29.375rem] desktop:w-[29.375rem]"
              src={formatPath(content.thumbnail.regular.large)}
              alt={content.title}
            />
          </picture>
          <div className="absolute top-[-6rem] inset-0 hidden  group-hover:flex items-center justify-center hover:opacity-100 bg-opacity-50 bg-black transition">
            <button className="bg-white bg-opacity-25 text-white rounded-full p-2 flex items-center space-x-2">
              <img src="src/assets/icon-play.svg" alt="Play icon" />
              <p className="text-heading-xs pl-2 pr-4 ">Play</p>
            </button>
          </div>
          <div className=" sticky inset-0 bg-gradient-to-t from-black via-transparent to-transparent py-[0.99rem] px-4 md:py-[1.5rem] md:px-6 desktop:py-[1.399rem] desktop:px-[1.5rem] flex flex-col justify-end  ">
            <div className="text-xs md:text-[0.9375rem] opacity-75 flex items-center gap-[0.39rem] md:gap-[0.4rem] dektop:gap-[0.4rem]">
              <span>{content.year}</span>
              <span className="px-[0.1rem] md:px-[0.04rem]">•</span>
              {displayIcon(content.category)}
              <span>{content.category}</span>
              <span className="px-[0.1rem] md:px-[0.05rem] ">•</span>
              <span>{content.ageRating}</span>
            </div>
            <h3 className="relative top-0.5 md:top-0 text-[0.9375rem] md:text-[1.5rem]">
              {content.title}
            </h3>
          </div>
        </div>
        <div className="group">
          <button
            className="absolute desktop:top-[16px] top-[8px] desktop:right-[24px] right-[8px] w-8 h-8 md:right-[24px] md:top-[16px] bg-movie-secondary bg-opacity-50 rounded-full flex items-center justify-center hover:bg-movie-fifth transition"
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
        <div className="absolute top-0">
          {user.role == "admin" && <MovieFormModal data={content} />}
        </div>
      </div>
    </div>
  );
}
