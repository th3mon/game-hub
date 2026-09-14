import type { GameQuery } from "@/App";
import apiClient from "@/services/api-client";
import type { Platform } from "./usePlatforms";
import { useQuery } from "@tanstack/react-query";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((response) => response.data),
  });

export default useGames;
