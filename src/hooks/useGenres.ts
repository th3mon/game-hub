import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "./useGames";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>, Error>("/genres").then((response) => response.data),
  });

export default useGenres;
