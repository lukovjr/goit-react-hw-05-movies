import axios from 'axios';

export const fetchTrendingMovies = async () => {
  try {
    return await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=169863a84bc27c731fc45c45dd4a4a7e'
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMovieDetails = async id => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=169863a84bc27c731fc45c45dd4a4a7e`
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMovieCredits = async id => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=169863a84bc27c731fc45c45dd4a4a7e`
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMovieReviews = async id => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=169863a84bc27c731fc45c45dd4a4a7e`
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchMovieSearch = async query => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=169863a84bc27c731fc45c45dd4a4a7e`
    );
  } catch (err) {
    throw new Error(err.message);
  }
};