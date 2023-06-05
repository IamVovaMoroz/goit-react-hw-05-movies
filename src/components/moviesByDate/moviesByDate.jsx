import React, { useEffect, useState } from 'react';
import { getTrending } from 'services/Api'; // Импорт функции getTrending из файла 'services/Api'

const TrendingMovies = ({ year }) => {
  const [movies, setMovies] = useState([]); // Состояние для хранения списка фильмов

  useEffect(() => {
    fetchTrendingMovies(); // Вызов функции при монтировании компонента и при каждом изменении значения года
  }, [year]);

  const fetchTrendingMovies = async () => {
    try {
      const response = await getTrending(); // Вызов функции getTrending для получения списка популярных фильмов
      const trendingMovies = response.results; // Извлечение списка фильмов из ответа
      const moviesInYear = trendingMovies.filter(movie => {
        const releaseYear = new Date(movie.release_date).getFullYear(); // Получение года выпуска фильма из свойства release_date
        return releaseYear === year; // Фильтрация фильмов по году выпуска
      });
      setMovies(moviesInYear); // Обновление состояния с отфильтрованными фильмами
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Trending Movies in {year}</h2>
      {movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};

export default TrendingMovies;
