import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrending } from 'services/Api';
import Spinner from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import TrendingMoviesMarkup from 'components/TrendingMoviesMarkup/TrendingMoviesMarkup';

function HomePage() {
  // создаем State для ошибки, loading и для trendingMovies
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        // при запуске поиска ставим loading вкл
        setLoading(true);
        // отправляем запрос на сервер getTrending
        const trendingMoviesData = await getTrending();
        // записываем в State trendingMovies результат
        setTrendingMovies(trendingMoviesData.results);
        // отключаем loading 
        setLoading(false);
      } catch (error) {
        // если ошибка выводим сообщение
        setError(error.message);
        toast.error('Oops, something went wrong.');
        // отключаем также загрузку
        setLoading(false);
      }
    };
// вызываем функцию при загрузки страницы
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {error && <ToastContainer />}

      <h2>Trending Movies</h2>
      <TrendingMoviesMarkup trendingMovies={trendingMovies}/>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;