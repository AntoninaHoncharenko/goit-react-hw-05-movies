import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchMoviesByName } from '../../api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsloading] = useState(false);
  const movie = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (movie === '') {
      return;
    }

    async function fetchMovie() {
      try {
        setIsloading(true);
        const data = await fetchMoviesByName(movie);
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }

    fetchMovie();
  }, [movie]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
