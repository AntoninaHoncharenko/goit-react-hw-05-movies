import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../api';

export const Review = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviewsList() {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieReviewsList();
  }, [movieId]);

  return (
    <div>
      <div>Review</div>
      <ul>
        {reviews &&
          reviews.map(({ author, content }) => (
            <li>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
