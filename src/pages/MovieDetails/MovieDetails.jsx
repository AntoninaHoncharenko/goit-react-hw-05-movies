import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../api';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (movie.length < 1) {
    return;
  }

  const { title, release_date, vote_average, overview, poster_path, genres } =
    movie;

  return (
    <div>
      <NavLink to="/">Go back</NavLink>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>

      <div>{title}</div>
      <div>{release_date.slice(0, 4)}</div>
      <div>Raiting: {vote_average.toFixed(1)} / 10</div>
      <div>Overview</div>
      <div>{overview}</div>
      <div>Genres</div>
      <div>{genres.map(genre => genre.name).join(', ')}</div>

      <NavLink to="cast">Cast</NavLink>
      <br />

      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
};