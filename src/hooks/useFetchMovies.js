import { useState, useEffect } from "react";

export const useFetchMovies = (fetchFunction, param) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchFunction(param);
        setMovies(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [fetchFunction, param]);

  return { movies, loading, error };
};

// import { useState, useEffect } from "react";

// export const useFetchMovies = (fetchFunction, param) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadMovies = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const data = await fetchFunction(param);
//         setMovies(data.results);

//       } catch (err) {
//         setError(err.message || "Erreur");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (param) {
//       loadMovies();
//     }
//   }, [fetchFunction, param]);

//   return { movies, loading, error };
// };
