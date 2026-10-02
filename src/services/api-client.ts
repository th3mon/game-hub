import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: __RAWG_API__,
  },
});

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: __RAWG_API__,
  },
});

export class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = () => axiosInstance.get<T>(this.endpoint).then((response) => response.data);
}
