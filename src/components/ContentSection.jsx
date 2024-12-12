import { useEffect, useState } from "react";
import ContentCard from "./ContentCard";
import { getMovies } from "../helpers/movies/get";
import { v4 as uuidv4 } from "uuid";

export default function ContentSection({ movies }) {
  const [data, setData] = useState(movies);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const newMovies = await getMovies();
      setData(newMovies);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-movie-secondary">
      <h1 className="text-[1.2rem] mb-[0.7rem] md:text-[1.91rem] desktop:text-[1.91rem] desktop:mb-[28px] desktop:tracking-[0.3px]">
        Recommended for you
      </h1>

      <ul
        className="grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 gap-x-[0.938rem] gap-y-[1rem] md:gap-x-[1.813rem] md:gap-y-[1.5rem] 
      desktop:gap-x-[2.5rem] desktop:gap-y-[2rem]"
      >
        {data.map(
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
