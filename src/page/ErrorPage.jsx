import { Link } from "react-router";
import Button from "../components/Button";

const ErroePage = () => {
  return (
    <section className="h-[100vh]  bg-movie-fourth">
      <section className=" flex flex-col justify-center items-center text-movie-fifth h-[100%] gap-[5rem] ">
        <h1 className=" text-[8rem]">404 - Page Not Found</h1>
        <Link to="/" tabIndex={-1}>
          <Button>Go Home Page</Button>
        </Link>
      </section>
    </section>
  );
};

export default ErroePage;
