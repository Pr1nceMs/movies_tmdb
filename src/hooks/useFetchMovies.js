/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export const useFetchMovies = (fetchFunction, dependencies = []) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const loadMovies = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchFunction();
      setMovie(data);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      //  Traduction centralisée des erreurs
      switch (err.message) {
        case "NOT_FOUND":
          setError("La ressource demandée est introuvable.");
          break;

        case "SERVER_ERROR":
          setError("Le serveur rencontre un problème. Réessayez plus tard.");
          break;

        default:
          setError("Une erreur inattendue est survenue.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dependencies) {
      loadMovies();
    }
  }, dependencies);

  return { movie, movies, loading, error, totalPages, refetch: loadMovies };
};
