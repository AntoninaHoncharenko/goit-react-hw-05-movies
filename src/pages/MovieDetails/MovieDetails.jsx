import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  // const { movieId } = useParams();
  // console.log(movieId);
  return (
    <div>
      <NavLink to="/">Go back</NavLink>
      <div>Movie Details</div>
      <NavLink to="cast">Cast</NavLink>
      <br />
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
};
