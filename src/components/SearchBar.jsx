const SearchBar = ({ text }) => {
  return (
    <div className="flex items-center gap-[1.5rem]">
      <img src="/src/assets/icon-search.svg" />
      <input
        className="text-movie-fifth leading-[30px] text-heading-m font-medium p-0 bg-transparent border-0 border-b-2 border-movie-third"
        placeholder={text}
      />
    </div>
  );
};

export default SearchBar;
