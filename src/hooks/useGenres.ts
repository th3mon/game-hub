import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "@/services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
      })
      .catch((error: unknown) => {
        if (error instanceof CanceledError) {
          return;
        }

        if (error instanceof Error) {
          return setError(error.message);
        }
      })
      .finally(() => {
        // TODO: Timeout is for the testing purpose on developing time. Remove it after that phase.
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
