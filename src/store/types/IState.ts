import { IInitialAuthSlice } from "./IInitialAuthSlice";
import { IInitialReposSlice } from "./IInitialReposSlice";

export interface IState {
    auth: IInitialAuthSlice;
    repos: IInitialReposSlice;
}