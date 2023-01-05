import React, { useState, createContext, useContext, useEffect } from "react";
import { userContext } from "./userContext";


export const favsContext = createContext();
const { Provider } = favsContext;

const FavsContext = ({ children }) => {
  const {user} = useContext(userContext)
  const [favsUser, setFavsUser] = useState(null)

  useEffect(() => {
    setFavsUser(user)
  },[user]);

  const storedFavorites = localStorage.getItem("favoritos");
  var movies = [];
  if (storedFavorites != null) {
    movies = JSON.parse(storedFavorites);
  }

  const [favs, setFavs] = useState({
    movies: movies,
  });

  const addToFavs = (movie) => {
    const currentUser=favsUser

    let favsCopy = JSON.parse(JSON.stringify(favs));

    let movieIndex = favsCopy.movies.findIndex((p) => p.id === movie.id);

    if (movieIndex >= 0) {
      alert("esta movie ya está en tus favs");
    } else {
      favsCopy.movies.push(movie);
      alert("esta movie se agrego a favs");
      localStorage.setItem("favoritos", JSON.stringify(favsCopy.movies));
    }
    setFavs(favsCopy);
  };

  const getTotalMovies = () => {
    const currentUser=favsUser

    return favs.movies.length;
  };

  const cleanFavs = () => {
    const currentUser=favsUser

    setFavs({ movies: [] });
    localStorage.removeItem("favoritos");
  };

  const getFavoriteMovies = () => {
    const currentUser=favsUser

    return favs.movies;
  };

  const favsData = {
    getFavoriteMovies,
    addToFavs,
    cleanFavs,
    getTotalMovies,
  };

  return <Provider value={favsData}>{children}</Provider>;
};

export default FavsContext;
