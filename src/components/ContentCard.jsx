// BY DEFAULT CARD WILL DISPLAY NOT TRENDING AND ALL SHOWS
// passing a trending=true prop will display a trending card
// passing a type="Movies" or  type="TV Series" prop will display said show(movie or tv series)

import { useEffect, useState } from "react";

export default function ContentCard({ trending = false, type = "Shows" }) {
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

      setData((prevData) =>
        prevData.map((content, i) =>
          i === index ? { ...content, isBookmarked: !currentStatus } : content
        )
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const updatedSrc = (imgString) => {
    return "src/" + imgString.substring(1);
  };

  return (
    <div>
      {data.map((content, index) =>
        trending === true ? (
          content.isTrending && (
            // TRENDING
            <div
              className="items-center w-fit bg-movie-secondary border-none rounded-lg shadow dark:bg-movie-secondary dark:border-movie-secondary mb-40"
              key={content.title}
            >
              <div className="relative">
                <div>
                  <img
                    className="w-[240px] h-[140px] object-cover rounded desktop:w-[470px] desktop:h-[230px] hover:bg-movie-second"
                    src={updatedSrc(content.thumbnail.trending.large)}
                    alt=""
                  />
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 desktop:flex items-center justify-center hidden desktop:opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:bg-black transic transition">
                  <button
                    className="bg-white bg-opacity-25 text-white rounded-full p-2 flex items-center space-x-2"
                    onClick={() => console.log(content.title)}
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                        fill="#FFF"
                      />
                    </svg>
                    <p className="text-heading-xs pl-2 pr-4">Play</p>
                  </button>
                </div>
                <div className="group">
                  {/* BOOKMARK */}
                  <button
                    className="absolute top-2 right-2 w-10 h-10 bg-movie-secondary bg-opacity-50 rounded-full flex items-center justify-center hover:bg-movie-fifth transition"
                    onClick={() =>
                      handleBookmarkToggle(index, content.isBookmarked)
                    }
                  >
                    {content.isBookmarked ? (
                      <svg
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                          stroke="none"
                          strokeWidth="1.5"
                          fill="#FFF"
                          className="group-hover:stroke-movie-secondary"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                          stroke="#FFF"
                          strokeWidth="1.5"
                          fill="none"
                          className="group-hover:stroke-movie-secondary"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* DESCRIPTION */}
                <div className="absolute bottom-0 left-0 p-4  from-black">
                  <p className="text-body-s desktop:text-body-m font-light text-white flex items-center space-x-1">
                    <span>{content.year}</span>
                    <span>•</span>
                    {content.category === "Movie" ? (
                      <svg
                        className="inline-block w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                      >
                        <path
                          d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                          opacity=".75"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="inline-block w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                      >
                        <path
                          d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                          opacity=".75"
                        />
                      </svg>
                    )}
                    <span>{content.category}</span>
                    <span>•</span>
                    <span>{content.rating}</span>
                  </p>
                  {/* TITLE */}
                  <h5 className="text-body-m text-white font-heavy desktop:text-heading-s">
                    {content.title}
                  </h5>
                </div>
              </div>
            </div>
          )
        ) : //ELSE SHOWS
        type === "Shows" ? (
          <div
            className="items-center w-fit bg-movie-secondary border-none rounded-lg  dark:bg-movie-secondary dark:border-movie-secondary mb-40"
            key={content.title}
          >
            <div className="relative">
              <div>
                <img
                  className="w-[164px] h-[110px] object-cover rounded desktop:w-[280px] desktop:h-[174px] hover:bg-movie-second"
                  src={updatedSrc(content.thumbnail.regular.large)}
                  alt=""
                />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 desktop:flex items-center justify-center hidden desktop:opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:bg-black  transition">
                <button
                  className="bg-white bg-opacity-25 text-white rounded-full p-2 flex items-center space-x-2"
                  onClick={() => console.log(content.title)}
                >
                  <svg
                    width="30"
                    height="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                      fill="#FFF"
                    />
                  </svg>
                  <p className="text-heading-xs pl-2 pr-4">Play</p>
                </button>
              </div>
              <div className="group">
                {/* BOOKMARK */}
                <button
                  className="absolute top-2 right-2 w-10 h-10 bg-movie-secondary bg-opacity-50 rounded-full flex items-center justify-center hover:bg-movie-fifth transition"
                  onClick={() =>
                    handleBookmarkToggle(index, content.isBookmarked)
                  }
                >
                  {content.isBookmarked ? (
                    <svg
                      width="12"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                        stroke="none"
                        strokeWidth="1.5"
                        fill="#FFF"
                        className="group-hover:stroke-movie-secondary"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="12"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                        stroke="#FFF"
                        strokeWidth="1.5"
                        fill="none"
                        className="group-hover:stroke-movie-secondary"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="w-full pt-3">
              {/* DESCRIPTION TEXT */}
              <p className="text-body-s font-light text-movie-fifth flex items-center space-x-1">
                <span>{content.year}</span>
                <span>•</span>
                {content.category === "Movie" ? (
                  <svg
                    className="inline-block w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path
                      d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                      opacity=".75"
                    />
                  </svg>
                ) : (
                  <svg
                    className="inline-block w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path
                      d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                      opacity=".75"
                    />
                  </svg>
                )}
                <span>{content.category}</span>
                <span>•</span>
                <span>{content.rating}</span>
              </p>
              {/* TITLE */}
              <h5
                className="text-body-m text-movie-fifth font-heavy
                desktop:text-heading-xs"
              >
                {content.title}
              </h5>
            </div>
          </div>
        ) : type === "Movies" ? (
          //ELSE Movies
          type === content.category && (
            <div
              className="items-center w-fit bg-movie-secondary border-none rounded-lg  dark:bg-movie-secondary dark:border-movie-secondary mb-40"
              key={content.title}
            >
              <div className="relative">
                <div>
                  <img
                    className="w-[164px] h-[110px] object-cover rounded desktop:w-[280px] desktop:h-[174px] hover:bg-movie-second"
                    src={updatedSrc(content.thumbnail.regular.large)}
                    alt=""
                  />
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 desktop:flex items-center justify-center hidden desktop:opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:bg-black  transition">
                  <button
                    className="bg-white bg-opacity-25 text-white rounded-full p-2 flex items-center space-x-2"
                    onClick={() => console.log(content.title)}
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                        fill="#FFF"
                      />
                    </svg>
                    <p className="text-heading-xs pl-2 pr-4">Play</p>
                  </button>
                </div>
                <div className="group">
                  {/* BOOKMARK */}
                  <button
                    className="absolute top-2 right-2 w-10 h-10 bg-movie-secondary bg-opacity-50 rounded-full flex items-center justify-center hover:bg-movie-fifth transition"
                    onClick={() =>
                      handleBookmarkToggle(index, content.isBookmarked)
                    }
                  >
                    {content.isBookmarked ? (
                      <svg
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                          stroke="none"
                          strokeWidth="1.5"
                          fill="#FFF"
                          className="group-hover:stroke-movie-secondary"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                          stroke="#FFF"
                          strokeWidth="1.5"
                          fill="none"
                          className="group-hover:stroke-movie-secondary"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="w-full pt-3">
                {/* DESCRIPTION TEXT */}
                <p className="text-body-s font-light text-movie-fifth flex items-center space-x-1">
                  <span>{content.year}</span>
                  <span>•</span>
                  {content.category === "Movie" ? (
                    <svg
                      className="inline-block w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path
                        d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                        opacity=".75"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="inline-block w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path
                        d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                        opacity=".75"
                      />
                    </svg>
                  )}
                  <span>{content.category}</span>
                  <span>•</span>
                  <span>{content.rating}</span>
                </p>
                {/* TITLE */}
                <h5
                  className="text-body-m text-movie-fifth font-heavy
                desktop:text-heading-xs"
                >
                  {content.title}
                </h5>
              </div>
            </div>
          )
        ) : (
          //TV SERIES
          type === content.category && (
            <div
              className="items-center w-fit bg-movie-secondary border-none rounded-lg  dark:bg-movie-secondary dark:border-movie-secondary mb-40"
              key={content.title}
            >
              <div className="relative">
                <div>
                  <img
                    className="w-[164px] h-[110px] object-cover rounded desktop:w-[280px] desktop:h-[174px] hover:bg-movie-second"
                    src={updatedSrc(content.thumbnail.regular.large)}
                    alt=""
                  />
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 desktop:flex items-center justify-center hidden desktop:opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:bg-black  transition">
                  <button
                    className="bg-white bg-opacity-25 text-white rounded-full p-2 flex items-center space-x-2"
                    onClick={() => console.log(content.title)}
                  >
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                        fill="#FFF"
                      />
                    </svg>
                    <p className="text-heading-xs pl-2 pr-4">Play</p>
                  </button>
                </div>
                <div className="group">
                  {/* BOOKMARK */}
                  <button
                    className="absolute top-2 right-2 w-10 h-10 bg-movie-secondary bg-opacity-50 rounded-full flex items-center justify-center hover:bg-movie-fifth transition"
                    onClick={() =>
                      handleBookmarkToggle(index, content.isBookmarked)
                    }
                  >
                    {content.isBookmarked ? (
                      <svg
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                          stroke="none"
                          strokeWidth="1.5"
                          fill="#FFF"
                          className="group-hover:stroke-movie-secondary"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                          stroke="#FFF"
                          strokeWidth="1.5"
                          fill="none"
                          className="group-hover:stroke-movie-secondary"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="w-full pt-3">
                {/* DESCRIPTION TEXT */}
                <p className="text-body-s font-light text-movie-fifth flex items-center space-x-1">
                  <span>{content.year}</span>
                  <span>•</span>
                  {content.category === "Movie" ? (
                    <svg
                      className="inline-block w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path
                        d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                        opacity=".75"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="inline-block w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path
                        d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                        opacity=".75"
                      />
                    </svg>
                  )}
                  <span>{content.category}</span>
                  <span>•</span>
                  <span>{content.rating}</span>
                </p>
                {/* TITLE */}
                <h5
                  className="text-body-m text-movie-fifth font-heavy
                desktop:text-heading-xs"
                >
                  {content.title}
                </h5>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}
