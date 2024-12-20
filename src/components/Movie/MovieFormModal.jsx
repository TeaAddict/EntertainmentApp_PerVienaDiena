import { v4 as uuidv4 } from "uuid";
import MovieForm from "./MovieForm";
import AddMovieButton from "./AddMovieButton";
import Button from "../Button";

const MovieFormModal = ({ data, type }) => {
  const modalId = `modal${uuidv4()}`;

  const closeModal = () => document.getElementById(modalId).close();

  return (
    <div className="flex">
      {type == "add" ? (
        <AddMovieButton
          onClick={() => document.getElementById(modalId).showModal()}
        />
      ) : (
        <div>
          <Button
            size="small"
            onClick={() => document.getElementById(modalId).showModal()}
          >
            Edit
          </Button>
        </div>
      )}
      <dialog id={modalId} className="modal">
        <div className="modal-box flex justify-center bg-movie-fourth rounded-md">
          <MovieForm
            onClose={closeModal}
            data={data}
            heading={`${type ? "Add" : "Edit"}`}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MovieFormModal;
