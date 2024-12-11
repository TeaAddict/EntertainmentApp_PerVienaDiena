import { useState } from "react";

const SearchBar = ({ placeholderText, setValue }) => {
  const [currentText, setCurrentText] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setCurrentText(e.target.value);
  };

  return (
    <div className="flex justify-self-center items-start gap-[1.5rem] w-[540px] p-[1px]">
      <img src="/src/assets/icon-search.svg" />
      <input
        className="text-movie-fifth leading-[30px] text-heading-m font-medium p-0 pb-[0.94rem] bg-transparent border-0 focus:border-b-[1px] focus:border-movie-third focus:ring-0 w-full caret-movie-primary caret-width-[2px]"
        placeholder={placeholderText}
        onChange={handleChange}
        value={currentText}
      />
    </div>
  );
};

export default SearchBar;
