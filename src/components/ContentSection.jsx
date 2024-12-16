import ContentCard from "./ContentCard";
import { v4 as uuidv4 } from "uuid";

export default function ContentSection({ movies, heading, filter }) {
  // Filter the content based on the heading
  const filteredMovies = movies.filter((content) => {
    if (heading === "Bookmarked Movies") {
      return content.category === "Movie";
    } else if (heading === "Bookmarked Tv Series") {
      return content.category === "TV Series";
    } else {
      return true;
    }
  });

  return (
    <div className="bg-movie-secondary">
      <h1
        className="text-[1.2rem] md:text-[1.91rem] desktop:text-[1.91rem] 
        mb-[21px] md:mb-[20px] md:-mt-[2px] desktop:mb-[28px] 
        tracking-[0.19px] md:tracking-[0.3px] desktop:tracking-[0.3px]
        text-movie-fifth font-light"
      >
        {heading}
      </h1>

      <ul
        className="grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 
        gap-x-[15px] gap-y-[16px] 
        md:gap-x-[1.875rem] md:gap-y-[1.5rem] 
        desktop:gap-x-[2.5rem] desktop:gap-y-[2rem]"
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
