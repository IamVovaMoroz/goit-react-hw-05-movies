
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

function MoviesPage() {
// получаем масив фильмов с сервера
  const [movies, setMovies] = useState(
    ["movies-id-1", "movies-id-2", "movies-id-3", "movies-id-4"]

  );

// добавляем определение местоположения для возврата сюда
const location = useLocation()

// searchParams - аткуальное значение из url , setSearchParams - меняет url. Добавлением обьекта
  const [searchParams, setSearchParams] = useSearchParams()


  // можно получить значение из url с помощью метода searchParams.get("a")) a - ключ, значение которого нам нужно получить послезнака вопроса
  // http://localhost:3000/goit-react-hw-05-movies/movies?a=5&b=10
  // searchParams.get("a") =>  5


// console.log(searchParams.get("a")) 
// console.log(setSearchParams)
// по типу state, записываем значение movieId в const и доавляем как value input. Для сохранения значения введённого пользователем в input

// если нет movieId то пустая строка, чтобы небыло ошибки
const movieId = searchParams.get("movieId") ?? ""
console.log(movieId)
// useEffect(() => {


//   return () => {
//    http запрос
//   };
// }, [movieId])



const updateQueryString = evt => {
  // если evt.target.value "" записываем{} если есть то значение
  if(evt.target.value === ""){
   return setSearchParams({})
  }
  
  setSearchParams({movieId: evt.target.value})
}

const visibleMovies = movies.filter( movie => movie.includes(movieId))


console.log(location)
  return (
    <div>

      <input type="text" value={movieId} onChange={updateQueryString} />

      {/* <button onClick={()=> setSearchParams({c: "hello"})}>Change searchParams</button> */}
      
      <ul>
      {/* {movies.map( movie => { */}
     {visibleMovies.map( movie => {
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
