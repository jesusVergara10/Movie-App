import React, { useContext } from "react";
import { favsContext } from "../../../context/favsContext";
import Movie from "../movieListContainer/Movie";
import styled from "styled-components";

const FavsStyled = styled.main`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  background-color: black;
  font-family: Arial, Helvetica, sans-serif;
`;

const DivStyled = styled.div`
  font-family: Arial, Helvetica, sans-serif;

`

const Favs = () => {
  const { getFavoriteMovies, cleanFavs, getTotalMovies } = useContext(favsContext);
  const handleCleanFavs = () => {
    cleanFavs();
  };

// const Favs = () => {
//   const { getFavoriteMovies, cleanFavs } = useContext(favsContext);
//   const handleCleanFavs = () => {
//     cleanFavs();
//   };

  return (
    <DivStyled>
      {/* <h2>Favoritas {getTotalMovies()}</h2> */}
      <h2>FAVORITAS</h2>
      <h3 totalmovies={"getTotalMovies"}></h3>
      <button onClick={handleCleanFavs}>Clean Favs</button>
      <FavsStyled>
        {getFavoriteMovies().map((movie, key) => {
          return <Movie movie={movie} key={key} />;
        })}
      </FavsStyled>
    </DivStyled>
  );
};

export default Favs;
