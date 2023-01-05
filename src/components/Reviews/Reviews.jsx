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

  if (reviews.length < 1) {
    return;
  }

  return (
    <div>
      <div>Review</div>
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
