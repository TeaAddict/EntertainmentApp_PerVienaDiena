import { IconContext } from "react-icons";
import { IoMdAddCircle } from "react-icons/io";

const AddMovieButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <IconContext.Provider
        value={{
          className: "text-movie-primary text-[1.5rem] desktop:text-[2.5rem]",
        }}
      >
        <IoMdAddCircle />
      </IconContext.Provider>
    </button>
  );
};

export default AddMovieButton;
