import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Cast.module.css';
import { fetchMovieCredits } from 'API';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    (async () => {
      try {
        const { data } = await fetchMovieCredits(movieId);
        if (data.cast.length !== 0) return setCast(data.cast);
        setCast(null);
      } catch (error) {
        setError(error);
      }
    })();
  }, [movieId]);

  return (
    <> <div>
      {error && <h1>{error.message}</h1>}
      <ul className={css.ActorList}>
        {cast &&
          cast.map(actor => (
            <li key={actor.id} className={css.ActorItem}>
              <img
                className={css.Img}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                    : actor.image
                }
                alt={actor.title}
              />
              <p>{actor.name}</p>
              <p>Сharacter: {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
      
    </>
  );
};
export default Cast;