import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../api';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trenting today</h2>
      <MovieList movies={movies} />
    </div>
  );
};
