import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';
import { fetchTrendingMovies } from 'API';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <h1 className={css.HomeTitle}>Trending today</h1>
      {
        <ul  className={css.HomeList}>
          {trendingMovies && trendingMovies.map(({ title, id }) => (
            <li 
            key={id}>
              <Link
                to={`/movies/${id}`}
                state={location}
                className={css.HomeLink}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
};
export default Home;