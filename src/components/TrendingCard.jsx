import { useEffect, useState } from "react";
import { useUpdate } from "./Context/UpdateContext.jsx";
import { useUser } from "./Context/UserContext.jsx";
import addRemoveFromArray from "../helpers/functions/addRemoveFromArray.js";
import { updateUser } from "../helpers/users/post.js";
import { updateMovie } from "../helpers/movies/put.js";
import Rating from "./Rating.jsx";
import MovieFormModal from "./Movie/MovieFormModal.jsx";
import formatImgSource from "../helpers/functions/formatImgSource.js";

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

  const averageRating =
    content.rating.reduce((sum, { rating }) => sum + rating, 0) /
    (content.rating.length || 1);

  const userRating =
    content.rating.find((entry) => entry.userId === user.id)?.rating || null;

  const handleRatingUpdate = async (newRating) => {
    try {
      const updatedRatedMovies = [
        ...user.ratedMovies.filter((rating) => rating.movieId !== content.id),
        { movieId: content.id, rating: newRating },
      ];

      const updatedMovieRatings = [
        ...content.rating.filter((entry) => entry.userId !== user.id),
        { userId: user.id, rating: newRating },
      ];

      await updateUser(user.id, { ratedMovies: updatedRatedMovies });
      await updateMovie(content.id, { rating: updatedMovieRatings });
      update();
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  const displayIcon = (category) => {
    return (
      <img
        src={`/icon-category-${category === "Movie" ? "movie" : "tv"}.svg`}
        className="inline-block w-[12px] h-[12px]"
        alt={`${category} icon`}
      />
    );
  };

  // const formatPath = (path) => {
  //   if (path.includes("http")) {
  //     return path;
  //   } else {
  //     return `src/${path.substring(1)}`;
  //   }
  // };

  useEffect(() => {
    if (user) setIsBookmarked(user?.bookmarks?.includes(content.id));
  }, [user]);

  return (
    <div>
      <div className="relative">
        <div className="group">
          <picture>
            <img
              className="w-[15rem] md:w-[29.375rem] desktop:w-[29.375rem]"
              src={formatImgSource(content.thumbnail.regular.large)}
              alt={content.title}
            />
          </picture>
          <div className="absolute top-[-40%] inset-0 hidden  group-hover:flex items-center justify-center hover:opacity-100 bg-opacity-50 bg-black transition">
            <button className="bg-white bg-opacity-25 text-white rounded-full p-2 flex items-center space-x-2">
              <img src="/icon-play.svg" alt="Play icon" />
              <p className="text-heading-xs pl-2 pr-4 ">Play</p>
            </button>
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
        <div className="sticky inset-0 bg-gradient-to-t from-black via-transparent to-transparent py-[0.99rem] px-4 sm:py-[1.3rem] sm:px-6 lg:py-5 lg:px-[1.5rem] flex flex-col justify-end ">
          <div className="text-xs sm:text-[0.9375rem] opacity-75 flex items-center gap-[0.39rem] sm:gap-[0.4rem] lg:gap-[0.4rem]">
            <span>{content.year}</span>
            <span className="px-[0.1rem] sm:px-[0.04rem]">•</span>
            {displayIcon(content.category)}
            <span>{content.category}</span>
            <span className="px-[0.1rem] sm:px-[0.05rem] ">•</span>
            <span>{content.ageRating}</span>
          </div>
          <div className="flex items-center gap-1">
            <h3 className="relative top-0.5 sm:top-0 text-[0.9375rem] sm:text-[1.5rem]">
              {content.title}
            </h3>
            <span className=" gap-[0.1rem]">
              <Rating rating={userRating || 0} setRating={handleRatingUpdate} />
            </span>
            <p className="opacity-2">({averageRating.toFixed(1)})</p>
          </div>
        </div>
      </div>
    </div>
  );
}
