import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
  const location = useLocation();
  const { title, name, id, poster_path } = movie;
  return (
    <li>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title || name}
        />
        <p>{title || name}</p>
      </NavLink>
    </li>
  );
};
