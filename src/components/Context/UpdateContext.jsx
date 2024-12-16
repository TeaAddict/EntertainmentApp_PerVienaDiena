// UserContext.jsx
import { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Provider component
export const UpdateProvider = ({ children }) => {
  const [updateCount, setUpdateCount] = useState(0);

  const update = () => setUpdateCount(updateCount + 1);

  return (
    <UserContext.Provider value={{ updateCount, update }}>{children}</UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUpdate = () => useContext(UserContext);
