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
  const [updateCount, setUpdateCount] = useState(0);

  const refetchUser = () => setUpdateCount(updateCount + 1);

  const getUserFromDb = async () => {
    try {
      if (!userId) {
        return setUser({ role: "" });
      }
      const userData = await getUser(userId);
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserFromDb();
  }, [updateCount]);

  return (
    <UserContext.Provider value={{ user, setUser, refetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
