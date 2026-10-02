import { type FetchResponse } from "@/services/api-client";
import genresService, { type Genre } from "@/services/genresService";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genresService.getAll,
    staleTime: 86400000, // 24 hours in miliseconds
    initialData: {
      count: genres.length,
      results: genres,
    },
  });

export default useGenres;
