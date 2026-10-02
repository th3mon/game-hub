import { type FetchResponse } from "@/services/api-client";
import platformsService, { type Platform } from "@/services/platformsService";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: 86400000, // 24 hours in miliseconds
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });

export default usePlatforms;
