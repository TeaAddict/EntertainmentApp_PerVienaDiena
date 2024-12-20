import { v4 as uuidv4 } from "uuid";
import Button from "../Button";

const Modal = ({ children, text }) => {
  const modalId = `modal${uuidv4()}`;

  const closeModal = () => document.getElementById(modalId).close();

  return (
    <div>
      <div>
        <Button onClick={() => document.getElementById(modalId).showModal()}>
          {text}
        </Button>
      </div>

      <dialog id={modalId} className="modal">
        <div className="modal-box flex justify-center bg-movie-fourth rounded-md">
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
