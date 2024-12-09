import { Link } from "react-router";
import Button from "./Button";

const Modal = ({ OpenButton }) => {
  return (
    <div>
      <button onClick={() => document.getElementById("my_modal_2").showModal()}>
        {<OpenButton />}
      </button>
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box flex flex-col justify-center items-center bg-movie-fourth">
          <p className="py-4 text-movie-fifth">
            Are you sure want to Sing Out?
          </p>
          <section className="flex flex-row gap-5">
            <Link to="/login">
              <Button onClick={() => document.getElementById("my_modal_2").close()}
              >
                Sing Out
              </Button >
            </Link>
            <Button type="secondary" onClick={() => document.getElementById("my_modal_2").close()}
            >
              Close
            </Button >
          </section>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
