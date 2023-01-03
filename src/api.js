import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '2b7f816e736d5b5ccbfcea974c6e28fa';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${KEY}`);
  return response.data.results;
};

export const fetchMoviesByName = () => {};

export const fetchMovieDetails = () => {};

export const fetchMovieCast = () => {};

export const fetchMovieReviews = () => {};
