const SearchBar = ({ text }) => {
  return (
    <div className="flex items-center gap-[1.5rem]">
      <img src="/src/assets/icon-search.svg" />
      <input
        className="text-movie-fifth leading-[30px] text-heading-m font-medium p-0 bg-transparent border-0 focus:border-b-[1px] focus:border-movie-third focus:ring-0 w-full"
        placeholder={text}
      />
    </div>
  );
};

export default SearchBar;
