import ContentCard from "./ContentCard";
import { v4 as uuidv4 } from "uuid";

export default function FoundSection({ movies, searchText }) {
  const resultLength = movies.length != 0 ? movies.length : 0;

  return (
    <div className="bg-movie-secondary">
      <h2 className="text-[1.2rem] mb-[1.3rem] md:text-[1.91rem] md:mb-[1.2rem] desktop:mb-[1.8rem] text-movie-fifth">
        {`Found ${resultLength} ${resultLength === 1 ? "result" : "results" } for ‘${searchText}’`}
      </h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 gap-x-[0.938rem] gap-y-[1rem] md:gap-x-[1.813rem] md:gap-y-[1.5rem] desktop:gap-x-[2.5rem] desktop:gap-y-[2rem]">
        {movies.map((content) => (
          <li key={uuidv4()}>
            <ContentCard content={content} />
          </li>
        ))}
      </ul>
    </div>
  );
}
