import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "./useGames";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((response) => response.data),
    staleTime: 86400000, // 24 hours in miliseconds
    initialData: {
      count: genres.length,
      results: genres,
    },
  });

export default useGenres;
