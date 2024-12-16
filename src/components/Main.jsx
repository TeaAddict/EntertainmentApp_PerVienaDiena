import { Outlet } from "react-router";
import Header from "./Header/Header";

const Main = () => {
  return (
    <div className="desktop:flex bg-movie-secondary p-0 md:pl-[1.56rem] md:pt-[1.44rem] desktop:p-[2rem] desktop:pr-[0] desktop:gap-[2.25rem]">
      <Header />
      <div className="px-[1rem] pr-[0] pb-[1rem] md:p-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
