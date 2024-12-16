import { Link } from "react-router";
import Button from "../components/Button";

const ErrorPage = ({ text, displayButton = false }) => {
  return (
    <section className="h-[100vh]  bg-movie-fourth">
      <section className=" flex flex-col justify-center items-center text-movie-fifth h-[100%] desktop:gap-[5rem] ">
        <h1 className="text-[2rem] desktop:text-[8rem]">{text}</h1>
        {displayButton && (
          <Link to="/" tabIndex={-1}>
            <Button>Go Home Page</Button>
          </Link>
        )}
      </section>
    </section>
  );
};

export default ErrorPage;
