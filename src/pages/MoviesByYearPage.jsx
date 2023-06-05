import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TrendingMoviesMarkup from 'components/TrendingMoviesMarkup/TrendingMoviesMarkup';
import { getTrending } from 'services/Api';


const MoviesByYearPage = ({ year }) => {
  // Используем хук useState для создания состояния, которое будет хранить массив фильмов
  const [movies, setMovies] = useState([]);

  // Используем хук useEffect для выполнения запроса к API при монтировании компонента
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  // Функция для получения популярных фильмов
  const fetchTrendingMovies = async () => {
    try {
      // Выполняем запрос к API с помощью функции getTrending
      const response = await getTrending();

      // Получаем массив популярных фильмов из ответа
      const trendingMovies = response.results;

      // Фильтруем фильмы по году выпуска, используя переданный год
      const moviesInYear = trendingMovies.filter(movie => {
        const releaseYear = new Date(movie.release_date).getFullYear();
        return releaseYear === year;
      });

      // Устанавливаем отфильтрованные фильмы в состояние
      setMovies(moviesInYear);
    } catch (error) {
      console.error(error);
    }
  };

  // Используем хук useLocation для получения текущего пути
  const location = useLocation();

  // Рендер компонента
  return (
    <div>
      <h2>Trending Movies in {year}</h2>
      {/* Передаем отфильтрованные фильмы и текущий путь в компонент TrendingMoviesMarkup */}
      <TrendingMoviesMarkup trendingMovies={movies} location={location} />
    </div>
  );
};

export default MoviesByYearPage;

