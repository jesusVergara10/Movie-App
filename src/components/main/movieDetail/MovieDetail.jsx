import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { favsContext } from "../../../context/favsContext";

const MovieDetail = ({ movie }) => {
  const { addToFavs } = useContext(favsContext);
  const handleAddToFavs = () => {
    addToFavs(movie);
  };

  const imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;

  const DivStyled = styled.div`
    display: flex;
    position: absolute;
    flex-flow: column wrap;
    align-content: flex-start;
    justify-content: flex-start;
    justify-self: flex-start;
    align-items: flex-start;
    margin: 10px;
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 300px;
    height: 170px; 
    @media (min-width: 720px){
    width: 700px;
    height: 400px;
    }
 
    img {
      padding: 5px;
      align-self: baseline;
      width: 130px;
      height: 170px;
      @media (min-width: 720px){
      width: 300px;
      height: 400px;
      }
    }
    h1 {
      justify-content:flex-start;
      align-self:flex-start ;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      height: 10px;
      width: 200px;
      @media (min-width: 720px){
      font-size: 35px;
      height: 30px;
      width: 600px;
      }
      
    }
    p{
      align-self: flex-start;
      justify-content: center;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 8px;
      width: 150px;
      @media (min-width: 720px){
      font-size: 17px;
      width: 400px;
      }
    }
    h3{
      align-self: flex-start;
      justify-content: center;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 8px;
      @media (min-width: 720px){
        font-size: 17px;
        width: 300px;
      }
    }
    button {

    }`


  return (
    <DivStyled>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt={"no hay img compi"}
      />
      <h1>{movie.title}</h1>
      <br />
      <p>{movie.overview}</p>
      <br />
      <h3>Genre: {movie.genres[0].name}</h3>
      <br />
      <button onClick={handleAddToFavs}>Add to Favourites</button>
      {/* <Link to="/favs">Ver Favoritos</Link> */}
    </DivStyled>
  );
};

export default MovieDetail;
