import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import type { FetchResponse } from "./useGames";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((repsonce) => repsonce.data),
    staleTime: 86400000, // 24 hours in miliseconds
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });

export default usePlatforms;
