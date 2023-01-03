import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p>Page is not found</p>
      <NavLink to="/">Return to Homepage</NavLink>
    </div>
  );
};
