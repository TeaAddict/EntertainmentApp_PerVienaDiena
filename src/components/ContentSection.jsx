import ContentCard from "./ContentCard";
import { v4 as uuidv4 } from "uuid";

export default function ContentSection({ movies, heading }) {
  return (
    <div className="bg-movie-secondary">
      <h1
        className={`text-[1.2rem] mb-[0.7rem] md:text-[1.91rem] desktop:text-[1.91rem] ${
          heading.toLowerCase() == "recommended for you"
            ? "desktop:mb-[2rem]"
            : "desktop:mb-[2.37rem]"
        } desktop:tracking-[0.3px] text-movie-fifth`}
      >
        {heading}
      </h1>

      <ul
        className="grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 gap-x-[0.938rem] gap-y-[1rem] md:gap-x-[1.875rem] md:gap-y-[1.5rem] 
      desktop:gap-x-[2.5rem] desktop:gap-y-[2rem]"
      >
        {movies.map(
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
