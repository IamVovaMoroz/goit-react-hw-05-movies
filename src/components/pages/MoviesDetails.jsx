import React from 'react'
import { useParams } from 'react-router-dom'

function MoviesDetails() {
    // useParams получаем значение id фильма
  const {movieId} = useParams()
  console.log(movieId)
//   тут делаем http апрос по id. state, loading, error
    return (
    
        <h2>MoviesDetails: {movieId}</h2>
    
  )
}

export default MoviesDetails
