import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'API';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    (async () => {
      try {
        const { data } = await fetchMovieReviews(movieId);
        if (data.results.length !== 0) return setReviews(data.results);
        setReviews(null);
      } catch (error) {
        setError(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <ul>
        {reviews &&
          reviews.map(reviews => (
            <li key={reviews.id}>
              <h3>Author: {reviews.author}</h3>
              <p>{reviews.content}</p>
            </li>
          ))}
        {reviews.length === 0 && (
          <h3>We don`t have any reviews for this movie</h3>
        )}
      </ul>
    </>
  );
};
export default Reviews;