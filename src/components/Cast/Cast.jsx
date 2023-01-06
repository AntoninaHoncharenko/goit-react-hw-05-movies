import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCastList() {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieCastList();
  }, [movieId]);

  if (cast.length < 1) {
    return;
  }

  return (
    <div>
      <div>Cast</div>
      <ul>
        {cast.map(({ name, character, profile_path, id }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
