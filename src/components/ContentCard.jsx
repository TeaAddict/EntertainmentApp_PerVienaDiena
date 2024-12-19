import { useEffect, useState } from "react";
import { useUpdate } from "./Context/UpdateContext";
import { updateUser } from "../helpers/users/post";
import { useUser } from "./Context/UserContext";
import { updateMovie } from "../helpers/movies/put";
import Rating from "./Rating";
import addRemoveFromArray from "../helpers/functions/addRemoveFromArray";
import MovieFormModal from "./Movie/MovieFormModal";

export default function ContentCard({ content }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { update } = useUpdate();
  const { user, setUser } = useUser();

  const averageRating =
    content.rating.reduce((sum, { rating }) => sum + rating, 0) /
    (content.rating.length || 1);

  const userRating =
    content.rating.find((entry) => entry.userId === user.id)?.rating || null;

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

  const handleRatingUpdate = async (newRating) => {
    try {
      const updatedMovieRatings = [
        ...content.rating.filter((entry) => entry.userId !== user.id),
        { userId: user.id, rating: newRating },
      ];

      await updateUser(user.id, {
        ratedMovies: [
          ...user.ratedMovies.filter((rating) => rating.movieId !== content.id),
          { movieId: content.id, rating: newRating },
        ],
      });

      await updateMovie(content.id, { rating: updatedMovieRatings });
      update();
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  useEffect(() => {
    if (user) setIsBookmarked(user?.bookmarks?.includes(content.id));
  }, [user]);

  if (Object.keys(user).length === 0) return <p>Loading...</p>;

  const updatedSrc = (imgString) => `src/${imgString.substring(1)}`;

  return (
    <div className="items-center bg-movie-secondary">
      <div className="relative">
        <div className="group relative">
          <div className="flex">
            <div className="min-w-[10.25rem] min-h-[6.875rem] md:min-w-[13.75rem] md:min-h-[8.75rem] desktop:min-w-[280px] desktop:min-h-[174px] img-background overflow-hidden">
              <img
                className="block object-cover rounded-[8px] hover:bg-movie-second w-full h-full"
                src={
                  content.thumbnail.regular.large[0] === "."
                    ? updatedSrc(content.thumbnail.regular.large)
                    : content.thumbnail.regular.large
                }
              />
            </div>
          </div>
        </div>

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

        <div className="flex justify-between w-full pt-[8px] md:pt-[6px]">
          <div>
            <div
              className="font-thin text-white flex items-center
            text-[11px] md:text-body-s desktop:text-body-s md:pb-[1px]"
            >
              <div className="flex items-center">
                <span className="pr-[7px] md:pr-[8px]">{content.year}</span>
                <span className="pr-[5px] md:pr-[8px]">•</span>
                <img
                  src={`src/assets/icon-category-${
                    content.category === "Movie" ? "movie" : "tv"
                  }.svg`}
                  className="inline-block 
                w-[10px] h-[10px] md:w-[12px] md:h-[12px]
                mr-[4px] md:mr-[6px]"
                />
                <span className="pr-[8px]">{content.category}</span>
                <span className="pr-[5px] md:pr-[8px]">•</span>
                <span>{content.ageRating}</span>
              </div>
            </div>

            <div className="text-white text-body-m md:text-heading-xs tracking-[-0.4px] md:tracking-[0] desktop:text-heading-xs">
              {content.title}
              <div className="flex gap-1 items-center">
                <span className="text-white text-body-s relative top-[-1.5px] desktop:top-0 md:">
                  <Rating
                    rating={userRating || 0}
                    setRating={handleRatingUpdate}
                  />
                </span>
                <p>({averageRating.toFixed(1)})</p>
              </div>
            </div>
          </div>
          {user.role == "admin" && <MovieFormModal data={content} />}
        </div>
      </div>
    </div>
  );
}
