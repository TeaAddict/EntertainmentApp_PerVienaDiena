import { useState } from "react";

const SearchBar = ({ placeholderText, setValue, setSearchParams }) => {
  const [currentText, setCurrentText] = useState("");

  const handleChange = (e) => {
    if (setValue) setValue(e.target.value);
    setCurrentText(e.target.value);
    setSearchParams({ search: e.target.value });
  };

  return (
    <label
      htmlFor="search"
      className="flex items-start gap-[1rem] w-full md:gap-[1.5rem] p-[1px]"
    >
      <img
        src="/src/assets/icon-search.svg"
        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
      />
      <div className="relative w-full">
        <input
          id="search"
          className="peer placeholder:text-slate-400 text-movie-fifth leading-[20px] md:leading-[30px] text-[16px] md:text-heading-m font-medium p-0 bg-transparent  focus:ring-0 w-full border-none caret-movie-primary"
          placeholder={placeholderText}
          onChange={handleChange}
          value={currentText}
        />
        <div className="absolute top-0 h-[2.44rem] w-full  peer-focus:border-b-[1px] peer-focus:border-movie-third pointer-events-none" />
      </div>
    </label>
  );
};

export default SearchBar;
