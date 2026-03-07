/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export const useFetch = (asyncFunction, params = [], dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const execute = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await asyncFunction(...params);
        setData(result);
      } catch (err) {
        setError(err.message || "Erreur");
      } finally {
        setLoading(false);
      }
    };

    execute();
  }, dependencies);

  return { data, loading, error };
};
