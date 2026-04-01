import type { GameQuery } from "@/App";
import apiClient from "@/services/api-client";

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
  rating_top: number;
}

interface FetchResponse<T> {
  count: number;
  results: T[];
}

type GamesResource =
  | { status: "pending"; promise: Promise<void> }
  | { status: "resolved"; data: Game[] }
  | { status: "rejected"; error: Error };

const gamesCache = new Map<string, GamesResource>();

const createCacheKey = (gameQuery: GameQuery) =>
  JSON.stringify({
    genreId: gameQuery.genre?.id ?? null,
    platformId: gameQuery.platform?.id ?? null,
    sortOrder: gameQuery.sortOrder ?? "",
    searchText: gameQuery.searchText ?? "",
  });

const createGamesResource = (gameQuery: GameQuery): GamesResource => {
  const promise = apiClient
    .get<FetchResponse<Game>>("/games", {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    })
    .then((response) => {
      gamesCache.set(createCacheKey(gameQuery), {
        status: "resolved",
        data: response.data.results,
      });
    })
    .catch((error: unknown) => {
      gamesCache.set(createCacheKey(gameQuery), {
        status: "rejected",
        error:
          error instanceof Error ? error : new Error("Failed to fetch games."),
      });
    });

  return { status: "pending", promise };
};

const useGames = (gameQuery: GameQuery) => {
  const cacheKey = createCacheKey(gameQuery);
  let resource = gamesCache.get(cacheKey) ?? null;

  if (!resource) {
    resource = createGamesResource(gameQuery);
    gamesCache.set(cacheKey, resource);
  }

  if (resource.status === "pending") throw resource.promise;
  if (resource.status === "rejected") throw resource.error;

  return resource.data;
};

export default useGames;
