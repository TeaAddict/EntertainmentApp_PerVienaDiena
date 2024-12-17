import { Outlet } from "react-router";
import Header from "./Header/Header";
// import Cookies from "js-cookie";
// import { useEffect, useState } from "react";
// import { getUser } from "../helpers/users/get";
import { UserProvider } from "./Context/UserContext";

const Main = () => {
  // const [user, setUser] = useState({});
  // const userId = Cookies.get("id");

  // const getUserFromDb = async () => {
  //   const userData = await getUser(userId);
  //   setUser(userData);
  // };

  // useEffect(() => {
  //   getUserFromDb();
  // }, []);

  return (
    <div className="desktop:flex bg-movie-secondary p-0 md:pl-[1.56rem] md:pt-[1.44rem] md:pr-[1.5rem] desktop:p-[2rem] desktop:gap-[2.25rem]">
      <UserProvider>
        <Header />
        <div className="px-[1rem] pb-[1rem] md:p-0 desktop:w-full">
          <Outlet />
        </div>
      </UserProvider>
    </div>
  );
};

export default Main;
