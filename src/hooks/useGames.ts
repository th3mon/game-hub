import type { GameQuery } from "@/App";
import { type FetchResponse } from "@/services/api-client";
import gamesService, { type Game } from "@/services/gamesService";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
