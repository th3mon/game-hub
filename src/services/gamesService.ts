import { APIClient, type FetchResponse } from "./api-client";
import type { Platform } from "./platformsService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export default new APIClient<FetchResponse<Game>>("/games");
