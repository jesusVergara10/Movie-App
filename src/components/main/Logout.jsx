import React, { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
import { favsContext } from "../../context/favsContext";



// const favsContext = createContext();
// const { Provider } = favsContext;

const Logout = () => {
  
  const {logOutUser}=useContext(userContext)
  const {cleanFavs} = useContext(favsContext)
  
  const navigate = useNavigate();
  useEffect(() => {
    logOutUser()
    cleanFavs()
    setTimeout(() => {
        navigate("/");
    }, 2000);
  });

  return (
    <div>
      <h2>nos vamos</h2>
    </div>
  );
};

export default Logout;