import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrending } from 'services/Api';


const MoviesPage = () => {
// получаем масив фильмов с сервера
// добавляем определение местоположения для возврата сюда
const location = useLocation()
const [movies, setMovies] = useState([]);
// searchParams - аткуальное значение из url , setSearchParams - меняет url. Добавлением обьекта
const [searchParams, setSearchParams] = useSearchParams()
// если нет query то пустая строка, чтобы небыло ошибки
const query = searchParams.get("query") ?? ""
const [isLoading, setIsLoading] = useState(false);

  // можно получить значение из url с помощью метода searchParams.get("a")) a - ключ, значение которого нам нужно получить послезнака вопроса
  // http://localhost:3000/goit-react-hw-05-movies/movies?a=5&b=10
  // searchParams.get("a") =>  5
// console.log(searchParams.get("a")) 
// по типу state, записываем значение Query в const и доавляем как value input. Для сохранения значения введённого пользователем в input


console.log(query)
// useEffect(() => {


//   return () => {
//    http запрос
//   };
// }, [query])


useEffect(() => {


  setIsLoading(true);

  const response = getTrending();
  response.then(data =>{

  


    // setMovies(data.results);
  
    setIsLoading(false);
  } ).catch(error => console.log(error));

}, [movies, query]);



const updateQueryString = evt => {
  // если evt.target.value "" записываем{} если есть то значение
  if(evt.target.value === ""){
   return setSearchParams({})
  }
  
  setSearchParams({query: evt.target.value})
}

// const visibleMovies = movies.filter( movie => movie.includes(query))





console.log(location)
  return (
    <div>

      <input type="text" value={query} onChange={updateQueryString} />

      {/* <button onClick={()=> setSearchParams({c: "hello"})}>Change searchParams</button> */}
      
      <ul>
      {/* {movies.map( movie => { visibleMovies*/ }
     {movies.map( movie => {
      // `${movie}` чтобы прописать путь url и для строк и цифр для получаемых. Link - активная ссылку
      return (
      <li key={movie}>
      <Link  to={`${movie}`} state={{from:location}}>{movie}</Link>
      </li>
      );
      })}
      </ul>
    </div>
  );
};

export default MoviesPage
