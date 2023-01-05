import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieList from "./MovieList";

const MovieListContainer = ()=>{
  const [movies, setMovies] = useState([]);
  useEffect (()=>{
      axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=e9054d19973e6248b426d48dc77bf510&language=en-US&page=1`)
      .then((res)=>{
    setMovies(res.data.results);
    
  })
  
  },[]);
  console.log(movies);
  return (
    <MovieList movies={movies}/>
  )
}


export default MovieListContainer