import React, { useRef } from 'react'
import { Outlet, useParams, useLocation, Link } from 'react-router-dom'


function MoviesDetails() {

   
    const location = useLocation()

    const backLinkLocationRef = useRef(location.state?.from ?? "/movies")

    // useParams получаем значение id фильма
  const {movieId} = useParams()
  console.log(movieId)
//   тут делаем http апрос по id. state, loading, error
console.log("location со страницы описания фильма",backLinkLocationRef)
console.log("location со страницы описания фильма",location)
    return (
    <>
        <h2>MoviesDetails: {movieId}</h2>
        {/* добавляем кнопку для возврата, если усть location , добавляем  location.state.from*/}
        <Link to={backLinkLocationRef.current}>Go back to movies collection</Link>
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
