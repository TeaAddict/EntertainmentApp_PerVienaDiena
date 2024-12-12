// import { useEffect, useState } from "react";
import ContentCard from "./ContentCard";
// import { getMovies } from "../helpers/movies/get";

export default function FoundSection({ movies }) {
  //   const [data, setData] = useState(movies);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   const fetchData = async () => {
  //     try {
  //       const newMovies = await getMovies();
  //       setData(newMovies);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  if (!movies) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-movie-secondary">
      <h2 className="text-movie-fifth text-heading-xs font-light pb-[22px] desktop:text-heading-l desktop:pb-[23px]">
        Recommended for you
      </h2>

      <ul className="grid grid-cols-2 desktop:grid-cols-4 desktop:gap-x-[2.5rem] desktop:gap-y-[2rem]">
        {movies.map(
          (content) =>
            !content.isTrending && (
              <li key={content.title}>
                <ContentCard content={content} />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
