const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "fr-FR";

export const getMoviesByCategory = async (type = "popular", page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/${type}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&page=${page}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("NOT_FOUND");
    }
    if (response.status >= 500) {
      throw new Error("SERVER_ERROR");
    }
    throw new Error("UNKNOWN_ERROR");
  }

  const data = await response.json();
  return data;
};

export const getMoviesByGenre = async (genreId, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&page=${page}&with_genres=${genreId}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("NOT_FOUND");
    }
    if (response.status >= 500) {
      throw new Error("SERVER_ERROR");
    }
    throw new Error("UNKNOWN_ERROR");
  }

  const data = await response.json();
  return data;
};

export const getMoviesBySearch = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&page=${page}&query=${query}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("NOT_FOUND");
    }
    if (response.status >= 500) {
      throw new Error("SERVER_ERROR");
    }
    throw new Error("UNKNOWN_ERROR");
  }

  const data = await response.json();
  return data;
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("NOT_FOUND");
    }
    if (response.status >= 500) {
      throw new Error("SERVER_ERROR");
    }
    throw new Error("UNKNOWN_ERROR");
  }

  const data = await response.json();
  console.log(`Movie name is ${data.title}`);
  console.log(`${data.title}'s overview is ${data.overview}`);
  return data;
};

export const getGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("NOT_FOUND");
    }
    if (response.status >= 500) {
      throw new Error("SERVER_ERROR");
    }
    throw new Error("UNKNOWN_ERROR");
  }

  const data = await response.json();
  return data.genres;
};
