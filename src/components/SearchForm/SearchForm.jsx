import MovieRender from '../MovieRender/MovieRender';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.css';
import { fetchMovieSearch } from 'API';

const SearchForm = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmname = searchParams.get('qurey') ?? '';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ qurey: form.elements.qurey.value });
  };

  useEffect(() => {
    if (!filmname) {
      return;
    }
    (async () => {
      try {
        const { data } = await fetchMovieSearch(filmname);
        if (data.results.length === 0) {
          alert(
            'There are no movies... Please try again.'
          );
        }
        setFilms(data.results);
      } catch (error) {
        setError(error);
      }
    })();
  }, [filmname]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      <form onSubmit={handleSubmit} className={css.Form}>
        <input
          className={css.Input}
          type="text"
          autoComplete="off"
          autoFocus
          name="qurey"
          defaultValue={filmname}
        />
        <button type="submit" className={css.Btn}>
          <span className="button-label">Search</span>
        </button>
      </form>
      <MovieRender films={films} />
    </>
  );
};
export default SearchForm;