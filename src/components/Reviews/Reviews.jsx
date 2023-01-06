import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../api';
import { Loader } from 'components/Loader/Loader';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function fetchMovieReviewsList() {
      try {
        setIsloading(true);
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
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
      {isLoading && <Loader />}
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

export default Review;
