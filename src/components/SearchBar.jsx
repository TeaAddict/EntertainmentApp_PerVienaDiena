import { useState } from "react";

const SearchBar = ({ placeholderText, setValue }) => {
  const [currentText, setCurrentText] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setCurrentText(e.target.value);
  };

  return (
    <div className="flex items-start gap-[1.5rem] py-[2px] md:py-[0.5rem] md:pb-[0.2rem]">
      <img className="w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]" src="/src/assets/icon-search.svg" />
      <input
        className="placeholder:text-slate-400 text-movie-fifth leading-[30px] text-heading-m font-medium p-0 pb-[0.94rem] bg-transparent border-0 focus:border-b-[1px] focus:border-movie-third focus:ring-0 w-full caret-movie-primary caret-width-[2px]"
        placeholder={placeholderText}
        onChange={handleChange}
        value={currentText}
      />
    </div>
  );
};

export default SearchBar;
