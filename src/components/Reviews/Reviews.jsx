import React from 'react'
import { useParams } from 'react-router-dom'

function Reviews() {

    const {movieId} = useParams()
// тут делаем http запрос по отзывам о фильме
  return (
    <div>
     `тут отзывы по Id фильма {movieId}`
    </div>
  )
}

export default Reviews
