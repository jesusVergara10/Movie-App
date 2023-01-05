import React, { useState, createContext, useEffect } from "react";
import { getAccount } from "../services/registerServices";

export const userContext = createContext();
const { Provider } = userContext;

const UserContext = ({ children }) => {
  var currentUser = localStorage.getItem("user");
  const [user, setUser] = useState(currentUser);
  
  const authenticateUser = (userName, password) => {
    var toAutAccount = getAccount(userName);
    if (toAutAccount) {
      if (password === toAutAccount.password) {
        setUser(toAutAccount.userName);
        localStorage.setItem("user", userName);
        return true;
      }
    }
    return false;
  };

  const logOutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const userSession = {
    user,
    authenticateUser,
    logOutUser,
  };
  return <Provider value={userSession}>{children}</Provider>;
};

export default UserContext;
