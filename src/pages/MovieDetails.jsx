

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
      <Suspense fallback={<div><span className="loader"></span></div>}>
        <Outlet />
      </Suspense>
      <div>
        <MovieCard movieInfo={movieInfo} />
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
      </div>
    </>
  );
}

export default MovieDetails;




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
