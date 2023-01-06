import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchMoviesByName } from '../../api';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [name, setName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';
  // const location = useLocation();

  const handleSubmit = query => {
    // setName(query);
    setSearchParams({ query });
  };

  useEffect(() => {
    if (movie === '') {
      return;
    }

    async function fetchMovie() {
      try {
        const data = await fetchMoviesByName(movie);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movie]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {movies && <MovieList movies={movies} />}
    </div>
  );
};
