import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MoviesStyled = styled.article`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 300px;
height: 400px;
margin: 10px;
background-color: white;
img{
    width: 300px;
    height: 400px;
}
`

const Movie = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
        <MoviesStyled>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>

        </MoviesStyled>
    </Link>
  )
};

export default Movie