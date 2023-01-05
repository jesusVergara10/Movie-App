import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieDetail from "./MovieDetail";

const MovieDetailContainer = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=e9054d19973e6248b426d48dc77bf510&language=en-US`)
        .then(res=>setMovie(res.data))
    },[id])

  return (
    movie?.id && (
    <MovieDetail movie={movie}/>
    )
  )
}

export default MovieDetailContainer