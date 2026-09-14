import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () =>
  useQuery<GenreResponse, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<GenreResponse>("/genres").then((response) => response.data),
  });

export default useGenres;
