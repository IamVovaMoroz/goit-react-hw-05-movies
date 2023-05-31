import axios from 'axios';
const API_KEY = 'a148ed5961285512fd3954af576af4a0';

// популярное
export const getTrending = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
      headers: {
        Accept: 'application/json',
      },
    });
    return response.data;
  };

//   запрос по ключевому слову
export const getMovies = async query => {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
        include_adult: false,
        query: query,
      },
      headers: {
        Accept: 'application/json',
      },
    });
    return response.data;
  };

  // делати фильмов
  export async function getMovieDetails(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`;
  
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }



  export const getMovieCredits = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    
    try {
      const response = await axios.get(url, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
        headers: {
          Accept: 'application/json',
        },
      });
     
      return response.data;
      
    } catch (error) {
      throw error;
    }
  };
  

  export const getMovieReviews = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
    
    try {
      const response = await axios.get(url, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          // page: 1,
        },
        headers: {
          Accept: 'application/json',
        },
      });
     
      return response.data;
      
    } catch (error) {
      throw error;
    }
  };