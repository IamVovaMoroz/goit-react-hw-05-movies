import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovies } from 'services/Api';
import MoviesListMarkup from 'components/MoviesPageMarkup/MoviesPageMarkup';
import "../../src/components/Spinner/spinner.css"
// import eatingPopcornGif from '../eating-popcorn.gif';
import filmGif from '../film.gif';
// import gifPopcorn from '../gif-popcorn.gif';

const MoviesPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchExecuted, setIsSearchExecuted] = useState(false);

  useEffect(() => {
    if (isSearchExecuted && movies.length === 0 && !isLoading) {
      toast.info('No movies found');
    }
  }, [movies.length, isSearchExecuted, isLoading]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!query) {
      toast.error('Please enter a search query');
      return;
    }
    searchMovies();
  };

  const updateQueryString = (evt) => {
    setSearchParams({ query: evt.target.value });
  };

  const searchMovies = () => {
    setIsLoading(true);
    setIsSearchExecuted(true);
    getMovies(query)
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
        <form
        onSubmit={handleFormSubmit}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <input
          type="text"
          value={query}
          onChange={updateQueryString}
          placeholder="Search movie"
          style={{
            padding: '10px',
            marginRight: '10px',
          
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '26px',
            outline: 'none',
            transition: 'border-color 0.3s',
          }}
          className={query ? 'input-active' : ''}
        />
        <button
          className="button"
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: 'rgba(0, 121, 191, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '26px',
            cursor: 'pointer',
            outline: 'none',
            transition: 'background-color 0.3s',
          }}
        >
          Search
        </button>
      </form>
{/* gif */}
<div style={{ margin: '100px' }}>
        {!isSearchExecuted && !isLoading ? (
          <img
            src={filmGif}
            alt="film Gif"
            style={{ width: '880px', height: '600px' }}
          />
        ) : null}
      </div>

      {isLoading && <div><span className="loader"></span></div>}
      {isSearchExecuted && movies.length === 0 && !isLoading && (
        <div style={{color: ' rgba(0, 121, 191, 0.8)', marginTop: '150px', fontSize: '30px', fontWeight: '800', textTransform: 'uppercase' }}>
        No movies found
      </div>
      )}
       {movies.length > 0 && (
        <MoviesListMarkup movies={movies} location={location} />
      )}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
           
            <Link to={`${movie.id}`} state={{ from: location }}>
             
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;


// Делаем скилет - пути
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { Link, useLocation, useSearchParams } from 'react-router-dom';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { getTrending } from 'services/Api';
// import './MoviesPage.css';


// const MoviesPage = () => {
// // получаем масив фильмов с сервера
// // добавляем определение местоположения для возврата сюда
// const location = useLocation()
// const [movies, setMovies] = useState([]);
// // searchParams - аткуальное значение из url , setSearchParams - меняет url. Добавлением обьекта
// const [searchParams, setSearchParams] = useSearchParams()
// // если нет query то пустая строка, чтобы небыло ошибки
// const query = searchParams.get("query") ?? ""
// const [isLoading, setIsLoading] = useState(false);

//   // можно получить значение из url с помощью метода searchParams.get("a")) a - ключ, значение которого нам нужно получить послезнака вопроса
//   // http://localhost:3000/goit-react-hw-05-movies/movies?a=5&b=10
//   // searchParams.get("a") =>  5
// // console.log(searchParams.get("a")) 
// // по типу state, записываем значение Query в const и доавляем как value input. Для сохранения значения введённого пользователем в input


// console.log(query)
// // useEffect(() => {


// //   return () => {
// //    http запрос
// //   };
// // }, [query])


// useEffect(() => {


//   setIsLoading(true);

//   const response = getTrending();
//   response.then(data =>{

  


//     // setMovies(data.results);
  
//     setIsLoading(false);
//   } ).catch(error => console.log(error));

// }, [movies, query]);



// const updateQueryString = evt => {
//   // если evt.target.value "" записываем{} если есть то значение
//   if(evt.target.value === ""){
//    return setSearchParams({})
//   }
  
//   setSearchParams({query: evt.target.value})
// }

// // const visibleMovies = movies.filter( movie => movie.includes(query))





// console.log(location)
//   return (
//     <div>

//       <input type="text" value={query} onChange={updateQueryString} />

//       <button className='button' onClick={()=> setSearchParams({})}>Clear Search</button>
      
//       <ul>
//       {/* {movies.map( movie => { visibleMovies*/ }
//      {movies.map( movie => {
//       // `${movie}` чтобы прописать путь url и для строк и цифр для получаемых. Link - активная ссылку
//       return (
//       <li key={movie}>
//       <Link  to={`${movie}`} state={{from:location}}>{movie}</Link>
//       </li>
//       );
//       })}
//       </ul>
//     </div>
//   );
// };

// export default MoviesPage
