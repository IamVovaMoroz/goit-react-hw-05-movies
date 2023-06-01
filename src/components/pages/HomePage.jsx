import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrending } from 'services/Api';
import Spinner from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import TrendingMoviesMarkup from 'components/TrendingMoviesMarkup/TrendingMoviesMarkup';

// const headingStyles = {
//   fontSize: '48px',
//   fontWeight: 'bold',
//   textAlign: 'center',
//   marginTop: '20px',
//   color: "rgba(0, 121, 191, 0.8)",
// };
// const headingStyles = {
//   fontSize: '48px',
//   fontWeight: 'bold',
//   textAlign: 'center',
//   marginTop: '20px',
//   animation: 'colorShift 3s infinite',
// };

// // CSS keyframes
// const keyframes = `
//   @keyframes colorShift {
//     0% { color: rgba(0, 121, 191, 0.8); }
//     50% { color: rgba(0, 186, 255, 0.8); }
//     100% { color: rgba(0, 121, 191, 0.8); }
//   }
// `;

// const headingStyles = {
//   fontSize: '48px',
//   fontWeight: 'bold',
//   textAlign: 'center',
//   marginTop: '60px',
//   textTransform: 'uppercase',
//   animation: 'colorShift 9s infinite',
// };

// // CSS keyframes
// const keyframes = `
//   @keyframes colorShift {
//     0% { color: rgba(0, 121, 191, 0.8); }
//     25% { color: rgba(0, 186, 255, 0.8); }
//     50% { color: rgba(24, 98, 19, 0.8); }
//     75% { color: rgba(0, 186, 145, 0.8); }
//     100% { color: rgba(0, 121, 191, 0.8); }
//   }
// `;

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
      <h2 style={headingStyles}>Trending Movies</h2>
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