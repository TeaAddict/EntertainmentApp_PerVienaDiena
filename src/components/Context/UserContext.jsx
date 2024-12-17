// UserContext.jsx
import { createContext, useState, useContext, useEffect } from "react";
import { getUser } from "../../helpers/users/get";
import Cookies from "js-cookie";

// Create the context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const userId = Cookies.get("id");

  const getUserFromDb = async () => {
    const userData = await getUser(userId);
    setUser(userData);
  };

  useEffect(() => {
    getUserFromDb();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
