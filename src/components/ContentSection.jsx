import ContentCard from "./ContentCard";
import { v4 as uuidv4 } from "uuid";
import MovieManipulation from "./MovieManipulation";
import { useState } from "react";

export default function ContentSection({ movies, heading }) {
  const filteredMovies = movies.filter((content) => {
    if (heading === "Bookmarked Movies") {
      return content.category === "Movie";
    } else if (heading === "Bookmarked TV Series") {
      return content.category === "TV Series";
    } else {
      return true;
    }
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-movie-secondary">
      <h1
        className={`text-[1.2rem] md:text-[1.91rem] desktop:text-[1.91rem] 
         mb-[22px]
         md:-mt-[0.125rem] 
        ${
          heading.toLowerCase() == "recommended for you"
            ? "md:mb-[1.25rem] desktop:mb-[1.75rem]"
            : "desktop:mb-[2.2rem]"
        } 
        tracking-[0.19px] md:tracking-[0.3px] desktop:tracking-[0.3px]
        text-movie-fifth font-extralight `}
      >
        {heading}
      </h1>

      <div>
        <button
          className="bg-movie-third text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add Movie
        </button>
        {isModalOpen && (
          <MovieManipulation
            heading={"Add"}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>

      <ul
        className="grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 
        gap-x-[15px] gap-y-[13px] 
        md:gap-x-[1.875rem] md:gap-y-[23px] 
        desktop:gap-x-[40px] desktop:gap-y-[30px]"
      >
        {filteredMovies.map(
          (content) =>
            !content.isTrending && (
              <li key={uuidv4()}>
                <ContentCard content={content} />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
