import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

const ConfirmationModal = ({
  openButtonText,
  confirmButtonText,
  confirmText,
  onClick,
}) => {
  const modalId = `modal${uuidv4()}`;

  return (
    <div className="flex">
      <button onClick={() => document.getElementById(modalId).showModal()}>
        {<Button styleType="primary">{openButtonText}</Button>}
      </button>
      <dialog id={modalId} className="modal ">
        <div className="modal-box flex flex-col justify-center items-center bg-movie-fourth">
          <p className="py-4 text-movie-fifth">{confirmText}</p>
          <section className="flex flex-row gap-5">
            <Button onClick={onClick}>{confirmButtonText}</Button>
            <Button
              styleType="secondary"
              onClick={() => document.getElementById(modalId).close()}
            >
              Close
            </Button>
          </section>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ConfirmationModal;
