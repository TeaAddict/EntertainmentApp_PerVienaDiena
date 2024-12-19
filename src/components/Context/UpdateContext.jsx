import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UpdateProvider = ({ children }) => {
  const [updateCount, setUpdateCount] = useState(0);

  const update = () => setUpdateCount(updateCount + 1);

  return (
    <UserContext.Provider value={{ updateCount, update }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUpdate = () => useContext(UserContext);
