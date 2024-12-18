import { v4 as uuidv4 } from "uuid";
import MovieForm from "./MovieForm";
import AddMovieButton from "./AddMovieButton";

const MovieFormModal = ({ data }) => {
  const modalId = `modal${uuidv4()}`;

  const closeModal = () => document.getElementById(modalId).close();

  return (
    <div>
      <AddMovieButton
        onClick={() => document.getElementById(modalId).showModal()}
      />
      <dialog id={modalId} className="modal flex justify-center">
        <div className=" bg-movie-fourth rounded-md">
          <MovieForm onClose={closeModal} data={data} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MovieFormModal;
