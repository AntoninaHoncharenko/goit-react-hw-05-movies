import { NavLink } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
  const { title, name, id, poster_path } = movie;
  return (
    <li>
      <NavLink to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title || name}
        />
        <p>{title || name}</p>
      </NavLink>
    </li>
  );
};