import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrending } from 'services/Api';
import Spinner from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import TrendingMoviesMarkup from 'components/TrendingMoviesMarkup/TrendingMoviesMarkup';
import MovieSlider from 'components/MovieSlider/MovieSlider';
// import TrendingMovies from 'components/moviesByDate/moviesByDate';



const headingStyles = {
  fontSize: '48px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '70px',
  textTransform: 'uppercase',
  animation: 'colorShift 9s infinite',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
};

// CSS keyframes
const keyframes = `
  @keyframes colorShift {
    0% { color: rgba(0, 121, 191, 0.8); }
    25% { color: rgba(0, 186, 255, 0.8); }
    50% { color: rgba(127, 219, 255, 0.8); }
    75% { color: rgba(0, 186, 145, 0.8); }
    100% { color: rgba(0, 121, 191, 0.8); }
  }
`;


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
      <style>{keyframes}</style>
      {/* <TrendingMovies year={2023} /> */}
      <h2 style={headingStyles}>Top Rated</h2>
      <MovieSlider movies={trendingMovies} /> {/* Вставляем компонент MovieSlider с данными из trendingMovies */}
      <h2 style={headingStyles}>Trending Movies</h2>
      <TrendingMoviesMarkup trendingMovies={trendingMovies} />
      <ul>

        {/* {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}></Link>
          </li>
        ))} */}
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
