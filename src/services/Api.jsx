import axios from 'axios';

const API_KEY = 'a148ed5961285512fd3954af576af4a0';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
  },
});

export const getTrending = async (page = 1) => {
  try {
    const response = await axiosInstance.get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovies = async (query) => {
  try {
    const response = await axiosInstance.get('/search/movie', {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
        include_adult: false,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTrendingTV = async () => {
  try {
    const response = await axiosInstance.get('/trending/tv/day', {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};