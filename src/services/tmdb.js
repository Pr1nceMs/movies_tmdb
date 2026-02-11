const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "fr-FR";

export const getMoviesByCategory = async (type = "popular", page = 5) => {
  const response = await fetch(
    `${BASE_URL}/movie/${type}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&page=${page}`,
  );
  const data = await response.json();
  // console.log("render pour getMovies");
  // console.log(data.results);
  return data.results;
};

// export const getMovieById = async (id) => {
//   const response = await fetch(
//     `${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`,
//   );
//   const data = await response.json();
//   console.log(data.results[0]);
// };

export const getMoviesByGenre = async (genreId, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&page=${page}&with_genres=${genreId}`,
  );
  const data = await response.json();
  // console.log("render pour getMovieByGenre");
  // console.log(data.results);
  return data.results;
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
  console.log("render pour getMoviesBySearch");
  console.log(data.results);
};

export const getMovieById = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`,
  );
  const data = await response.json();
  console.log("render pour getMovieById");
  console.log(data);
};

export const getMovieByKeyword = async (keywordId, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=${LANGUAGE}&page=${page}&with_keywords=${keywordId}`,
  );
  const data = await response.json();
  console.log("render pour getMovieByKeyword");
  console.log(data.results);
};
export const getKeywords = async () => {
  const response = await fetch(
    `${BASE_URL}/keyword/movie/list?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`,
  );
  const data = await response.json();
  console.log("render pour getKeywords");
  console.log(data.keywords);
};
export const getCategories = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=${LANGUAGE}`,
  );
  const data = await response.json();
  console.log("render pour getCategories");
  console.log(data.genres);
};
