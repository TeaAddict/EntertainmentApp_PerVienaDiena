import { IconContext } from "react-icons";
import { IoMdAddCircle } from "react-icons/io";

const AddMovieButton = () => {
  return (
    <button>
      <IconContext.Provider
        value={{ className: "text-movie-primary text-[1.5rem]" }}
      >
        <IoMdAddCircle />
      </IconContext.Provider>
    </button>
  );
};

export default AddMovieButton;
