
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
// import React, { useRef, useState, useEffect } from 'react';
// import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
// import { Suspense } from 'react';
// import "../Spinner/spinner.css"
// import { getMovieDetails } from 'services/Api' // Импортируем функцию getMovieDetails из файла API (замените 'your-api-file' на правильный путь к вашему файлу)

// function MovieDetails() {
//   const location = useLocation();
//   const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
//   const { movieId } = useParams();
//   const [movieInfo, setMovieInfo] = useState(null); // Состояние для хранения информации о фильме
//   const [loading, setLoading] = useState(false); // Состояние для отслеживания состояния загрузки
//   const [error, setError] = useState(null); // Состояние для отслеживания ошибок

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const data = await getMovieDetails(movieId); // Выполняем запрос на сервер для получения информации о фильме
//         setMovieInfo(data); // Обновляем состояние с полученными данными
//         setLoading(false); // Устанавливаем состояние загрузки на false, так как запрос выполнен успешно
//       } catch (error) {
//         setError(error); // Устанавливаем состояние ошибки 
//         setLoading(false); // Устанавливаем состояние загрузки на false, так как запрос завершился с ошибкой
//       }
//     };

//     fetchMovieDetails(); // Вызываем функцию для выполнения запроса при монтировании компонента и при изменении ID фильма
//   }, [movieId]);

//   // Проверяем состояние загрузки и ошибки
//   if (loading) {
//     return <div>Loading...</div>; // Отображаем сообщение о загрузке, пока данные фильма загружаются
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>; // Отображаем сообщение об ошибке, если произошла ошибка при выполнении запроса
//   }

//   // Отображаем информацию о фильме и дочерние компоненты
//   return (
//     <>
//       <h2>MovieDetails: {movieId}</h2>
//       <Link to={backLinkLocationRef.current}>Go back to movies collection</Link>
//       <ul>
//         <li>
//           <Link to="Cast">Cast info</Link>
//         </li>
//         <li>
//           <Link to="Reviews">Reviews info</Link>
//         </li>
//       </ul>
//       <Suspense fallback={<div><span className="loader"></span></div>}>
//         <Outlet /> {/* Отображаем дочерние компоненты, определенные в маршрутизации */}
//       </Suspense>
//     </>
//   );
// }

// export default MovieDetails;


import React, { useRef, useState, useEffect } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { Suspense } from 'react';
import "../../src/components/Spinner/spinner.css"
import { getMovieDetails } from 'services/Api'
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieInfo(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {/* <h2>MovieDetails: {movieId}</h2> */}
      <div>
      {/* <Link to="/movies">Go Back</Link> */}
      {/* Остальной код и компоненты страницы MovieDetails */}
      <MovieCard movieInfo={movieInfo} />
      {/* Остальной код и компоненты страницы MovieDetails */}
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '30px' }}>
  <Link
    to={backLinkLocation.current}
    style={{
      display: 'inline-block',
      padding: '15px 30px', 
      backgroundColor: 'rgba(0, 121, 191, 0.8)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      fontSize: '24px', 
      marginTop: '20px',
      textTransform: 'uppercase', 
    }}
  >
    Go back
  </Link>
</div>
      <ul>
        {/* <li>
          <Link to={`${movieId}/cast`}>Cast info</Link>
        </li>
        <li>
          <Link to={`${movieId}/reviews`}>Reviews info</Link>
        </li> */}
      </ul>
      <Suspense fallback={<div><span className="loader"></span></div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;