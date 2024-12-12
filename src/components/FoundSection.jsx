import ContentCard from "./ContentCard";

export default function FoundSection({ movies }) {
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
