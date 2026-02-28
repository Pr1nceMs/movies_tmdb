const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "fr-FR";

export const getMoviesByCategory = async (type = "popular", page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/${type}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&page=${page}`,
  );
  const data = await response.json();
  // console.log("render pour getMovies");
  // console.log(data.total_pages);
  return data;
};

export const getMoviesByGenre = async (genreId, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&page=${page}&with_genres=${genreId}`,
  );
  const data = await response.json();
  // console.log("render pour getMovieByGenre");
  // console.log(data.results);
  return data;
};

export const getGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`,
  );
  const data = await response.json();
  // console.log("render pour getGenres");
  // console.log(data.genres);
  return data.genres;
};

export const getMoviesBySearch = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&page=${page}&query=${query}`,
  );
  const data = await response.json();
  // console.log("render pour getMoviesBySearch");
  // console.log(data.results);
  return data;
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`,
  );
  const data = await response.json();
  // console.log("render pour getMovieById");
  // console.log(data);
  return data;
};
