import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
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

  return { games, error, isLoading };
};

export default useGames;
