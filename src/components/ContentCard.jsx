//  Component that calls ContentCard should have something like this
// import { useEffect, useState } from "react";
// ...
// ...
// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("./src/data/data.json");
//       const jsonData = await response.json();
//       setData(jsonData);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };
//   fetchData();
// }, []);

// if (loading) {
//   return <p>Loading...</p>;
// }
// if (error) {
//   return <p>Error: {error}</p>;
// }
//
// return(
// {data.map((content, index) => (
//   <div key={content.title}>
//     <ContentCard content={content} index={index}></ContentCard>
//   </div>
// ))})

export default function ContentCard({ content, index }) {
  const handleBookmarkToggle = async (index, currentStatus) => {
    try {
      const response = await fetch(`http://localhost:3001/${index}`);
      const contentData = await response.json();

      const updatedData = { ...contentData, isBookmarked: !currentStatus };

      await fetch(`http://localhost:3001/${index}`, {
        method: "PUT",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // FIX
      // setData((prevData) =>
      //   prevData.map((content, i) =>
      //     i === index ? { ...content, isBookmarked: !currentStatus } : content
      //   )
      // );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updatedSrc = (imgString) => {
    return `src/${imgString.substring(1)}`;
  };

  const displayIcon = () => {
    return (
      <img
        src={`src/assets/icon-category-${
          content.category === "Movie" ? "movie" : "tv"
        }.svg`}
        className="inline-block w-4 h-4"
      />
    );
  };

  const displayBookmark = (index, isBookmarked) => {
    return (
      <div className="group">
        <button
          className="absolute top-2 right-2 w-8 h-8 bg-movie-secondary bg-opacity-50 rounded-full flex items-center justify-center hover:bg-movie-fifth transition"
          onClick={() => handleBookmarkToggle(index, isBookmarked)}
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
    );
  };

  const style = {
    trending: {
      container: "absolute bottom-0 left-0 p-4 from-black",
      description: "desktop:text-body-m",
      title: "desktop:text-heading-s",
      imgSize: "w-[240px] h-[140px] desktop:w-[470px] desktop:h-[230px]",
    },
    regular: {
      container: "w-full pt-3",
      description: "",
      title: "desktop:text-heading-xs",
      imgSize: "w-[164px] h-[110px] desktop:w-[280px] desktop:h-[174px]",
    },
  };

  return (
    <div className="items-center w-fit bg-movie-secondary">
      <div className="relative">
        <div>
          <img
            className={`object-cover rounded-[9px] hover:bg-movie-second ${
              content.isTrending
                ? style.trending.imgSize
                : style.regular.imgSize
            }`}
            src={updatedSrc(
              content.isTrending
                ? content.thumbnail.trending.large
                : content.thumbnail.regular.large
            )}
            alt=""
          />
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 desktop:flex items-center justify-center hidden desktop:opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:bg-black transition">
          <button className="bg-white bg-opacity-25 text-white rounded-full p-2 flex items-center space-x-2">
            <img src="src/assets/icon-play.svg" alt="Play icon" />
            <p className="text-heading-xs pl-2 pr-4">Play</p>
          </button>
        </div>

        {/* BOOKMARK */}
        {displayBookmark(index, content.isBookmarked)}

        {/* DESCRIPTION */}
        <div
          className={`pt-[9px] ${
            content.isTrending
              ? style.trending.container
              : style.regular.container
          }
          `}
        >
          <p
            className={`text-[12px] font-thin text-white flex items-center space-x-1  ${
              content.isTrending && style.trending.description
            }`}
          >
            <span>{content.year}</span>
            <span>•</span>
            {displayIcon()}
            <span>{content.category}</span>
            <span>•</span>
            <span>{content.rating}</span>
          </p>
          {/* TITLE */}
          <h5
            className={`text-body-m text-white font-heavy ${
              content.isTrending ? style.trending.title : style.regular.title
            }`}
          >
            {content.title}
          </h5>
        </div>
      </div>
    </div>
  );
}
