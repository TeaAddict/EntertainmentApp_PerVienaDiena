import { useEffect, useState } from "react";
import ContentCard from "./ContentCard";
import { getMovies } from "../helpers/movies/get";
import { v4 as uuidv4 } from 'uuid';

export default function RecomendedSection({ movies }) {
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
      <h2 className="text-movie-fifth text-heading-xs font-light pb-[22px] desktop:text-heading-l desktop:pb-[23px]">
        Recommended for you
      </h2>

      <ul className="grid grid-cols-2 desktop:grid-cols-4 desktop:gap-x-[2.5rem] desktop:gap-y-[2rem]">
        {data.map(
          (content) =>
            !content.isTrending && (
              <li key={uuidv4()}>
                <ContentCard content={content}/>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
