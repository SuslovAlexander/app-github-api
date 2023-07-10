import { TPartialRepo } from "./IRepo"

export interface IInitialReposSlice {
    found: TPartialRepo[];
    favorites: TPartialRepo[];
    searchInProcess: boolean;
    faforiteIsFetching: boolean;
}