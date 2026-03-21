import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
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
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useData;
