import { useNavigate } from "react-router";
import Button from "./Button";
import Cookies from "js-cookie";

const SignOutModal = ({ OpenButton }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    document.getElementById("signOutModal").close();
    navigate("/login");
    Cookies.remove("id");
  };

  return (
    <div className="flex">
      <button
        onClick={() => document.getElementById("signOutModal").showModal()}
      >
        {<OpenButton />}
      </button>
      <dialog id="signOutModal" className="modal ">
        <div className="modal-box flex flex-col justify-center items-center bg-movie-fourth">
          <p className="py-4 text-movie-fifth">
            Are you sure you want to Sign Out?
          </p>
          <section className="flex flex-row gap-5">
            <Button onClick={handleSignOut}>Sign Out</Button>
            <Button
              type="secondary"
              onClick={() => document.getElementById("signOutModal").close()}
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

export default SignOutModal;
