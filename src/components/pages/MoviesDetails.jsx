import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function MoviesDetails() {
    // useParams получаем значение id фильма
  const {movieId} = useParams()
  console.log(movieId)
//   тут делаем http апрос по id. state, loading, error
    return (
    <>
        <h2>MoviesDetails: {movieId}</h2>
        <ul>
            <li>
                {/* to="Cast" путь подкомпонента */}
                <Link to="Cast">Cast info</Link>
                            </li>
            <li>
                <Link to="Reviews">Reviews info</Link>
            </li>
        </ul>
        {/* вставляем Outlet если нужно рендерить от родителя доп компоненты,в app проложили путь и тут разметку + Outlet */}
        <Outlet/>
        </>
  )
}

export default MoviesDetails
