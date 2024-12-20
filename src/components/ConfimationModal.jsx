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
      {/* Open button for the modal */}
      <Button
        styleType="primary"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        {openButtonText}
      </Button>

      {/* Modal dialog */}
      <dialog id={modalId} className="modal">
        <div className="modal-box flex flex-col justify-center items-center bg-movie-fourth">
          <p className="py-4 text-movie-fifth">{confirmText}</p>
          <section className="flex flex-row gap-5">
            {/* Confirmation button */}
            <Button onClick={onClick}>{confirmButtonText}</Button>
            {/* Close button for the modal */}

            <Button
              styleType="secondary"
              onClick={() => document.getElementById(modalId).close()}
            >
              Close
            </Button>
          </section>
        </div>
      </dialog>
    </div>
  );
};

export default ConfirmationModal;
