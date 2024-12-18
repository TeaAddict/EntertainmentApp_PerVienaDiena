import { Outlet, useNavigate } from "react-router";
import Header from "./Header/Header";
import { useUser } from "./Context/UserContext";
import { useEffect } from "react";

const Main = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && user?.role == "") navigate("/login");
  }, [user?.role, navigate, isLoading]);

  return (
    <div className="desktop:flex bg-movie-secondary p-0 md:pl-[1.56rem] md:pt-[1.44rem] md:pr-[1.5rem] desktop:p-[2rem] desktop:gap-[2.25rem]">
      <Header />
      <div className="px-[1rem] pb-[1rem] md:p-0 desktop:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
