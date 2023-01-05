import { useState, useEffect } from 'react';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchMoviesByName } from '../../api';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('');

  const handleSubmit = query => {
    setName(query);
  };

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchMoviesByName(name);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [name]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {movies && <MovieList movies={movies} />}
    </div>
  );
};
