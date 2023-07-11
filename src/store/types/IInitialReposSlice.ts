import { TPartialRepo } from "./IRepo";

/**Интерфейс для repos слайса */
export interface IInitialReposSlice {
  found: TPartialRepo[];
  favorites: TPartialRepo[];
  searchInProcess: boolean;
  faforiteIsFetching: boolean;
}
