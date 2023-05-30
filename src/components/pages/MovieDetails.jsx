
// import React, { useRef, useState, useEffect } from 'react'
// import { Outlet, useParams, useLocation, Link } from 'react-router-dom'
// import { Suspense } from 'react'
// import { getMovieDetails } from 'services/Api'


// function MovieDetails() {
   
//     const location = useLocation()
//     const backLinkLocationRef = useRef(location.state?.from ?? "/movies")
//     // useParams получаем значение id фильма
//      const {movieId} = useParams()
//   // тут получаем id фильма
//     console.log(movieId)

// const [movieInfo, setMovieInfo] = useState(null); // Состояние для хранения информации о фильме
// const [loading, setLoading] = useState(true); // Состояние для отслеживания состояния загрузки
// const [error, setError] = useState(null); // Состояние для отслеживания ошибок
  

// useEffect(() => {
//   const fetchMovieDetails = async () => {
//     // setLoading(true);
//     try {
//       const data = await getMovieDetails(movieId); // Выполняем запрос на сервер для получения информации о фильме
//       setMovieInfo(data); // Обновляем состояние с полученными данными
//       setLoading(false); // Устанавливаем состояние загрузки на false, после запроса
//     } catch (error) {
//       setError(error); // Устанавливаем состояние ошибки, если ошибка
//       setLoading(false); // Устанавливаем состояние загрузки на false, если запрос завершился с ошибкой
//     }
//   };

//   fetchMovieDetails(); // Вызываем функцию для выполнения запроса при монтировании компонента и при изменении ID фильма
// }, [movieId]);
// //   тут делаем http апрос по id. state, loading, error

//     return (
//     <>
//         <h2>MoviesDetails: {movieId}</h2>
//         {/* добавляем кнопку для возврата, если усть location , добавляем  location.state.from*/}
//         <Link to={backLinkLocationRef.current}>Go back to movies collection</Link>
//         <ul>
//             <li>
//                 {/* to="Cast" путь подкомпонента */}
//                 <Link to="Cast">Cast info</Link>
//                             </li>
//             <li>
//                 <Link to="Reviews">Reviews info</Link>
//             </li>
//         </ul>
//         {/* вставляем Outlet если нужно рендерить от родителя доп компоненты,в app проложили путь и тут разметку + Outlet */}

//          <Suspense fallback={<div>Loading...</div>}>
//       <Outlet />
//       </Suspense>
//         </>
//   )
// }

// export default MovieDetails
import React, { useRef, useState, useEffect } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieDetails } from 'services/Api' // Импортируем функцию getMovieDetails из файла API (замените 'your-api-file' на правильный путь к вашему файлу)

function MovieDetails() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null); // Состояние для хранения информации о фильме
  const [loading, setLoading] = useState(false); // Состояние для отслеживания состояния загрузки
  const [error, setError] = useState(null); // Состояние для отслеживания ошибок

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId); // Выполняем запрос на сервер для получения информации о фильме
        setMovieInfo(data); // Обновляем состояние с полученными данными
        setLoading(false); // Устанавливаем состояние загрузки на false, так как запрос выполнен успешно
      } catch (error) {
        setError(error); // Устанавливаем состояние ошибки
        setLoading(false); // Устанавливаем состояние загрузки на false, так как запрос завершился с ошибкой
      }
    };

    fetchMovieDetails(); // Вызываем функцию для выполнения запроса при монтировании компонента и при изменении ID фильма
  }, [movieId]);

  // Проверяем состояние загрузки и ошибки
  if (loading) {
    return <div>Loading...</div>; // Отображаем сообщение о загрузке, пока данные фильма загружаются
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Отображаем сообщение об ошибке, если произошла ошибка при выполнении запроса
  }

  // Отображаем информацию о фильме и дочерние компоненты
  return (
    <>
      <h2>MovieDetails: {movieId}</h2>
      <Link to={backLinkLocationRef.current}>Go back to movies collection</Link>
      <ul>
        <li>
          <Link to="Cast">Cast info</Link>
        </li>
        <li>
          <Link to="Reviews">Reviews info</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet /> {/* Отображаем дочерние компоненты, определенные в маршрутизации */}
      </Suspense>
    </>
  );
}

export default MovieDetails;