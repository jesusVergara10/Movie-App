import React from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {
 if (movies){
  return movies.map((movie, key)=> (
    <Movie movie={movie} key={key}/>
  ))
 }
}

export default MovieList