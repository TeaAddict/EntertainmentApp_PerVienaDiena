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
    <div className="desktop:flex bg-movie-secondary   desktop:gap-[2.25rem] ">
      <div className=" desktop:ml-[2rem] desktop:mt-[2rem] desktop:mr-0 desktop:pt-0 md:pt-[1.44rem] md:ml-[1.56rem] md:mr-[1.5rem]">
        <Header />
      </div>
      <div className=" pb-[1rem] md:p-0 desktop:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
