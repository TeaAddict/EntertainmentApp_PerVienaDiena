import { useEffect, useState } from "react";
import ContentCard from "./ContentCard";

export default function RecomendedSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/data/data.json");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-movie-secondary px-[8px] desktop:px-[80px]">
      <h2 className="text-movie-fifth text-heading-xs font-light px-[8px] pb-[22px] desktop:px-[20px] desktop:text-heading-l desktop:pb-[23px]">
        Recommended for you
      </h2>

      <ul className="grid grid-cols-2 desktop:grid-cols-4">
        {data.map(
          (content, index) =>
            !content.isTrending && (
              <li
                key={content.title}
                className="flex justify-center pb-[13px] desktop:pb-[30px]"
              >
                <ContentCard content={content} index={index} />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
