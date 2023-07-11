import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOriginRepo } from "../types/TPartialOriginRepo";
import { IState } from "../types/IState";
import { fetchWrap } from "../../utils/fetchWrap";
import { queryGetFavorite } from "../../queries/queryGetFavorite";

export const getFavoriteRepos = createAsyncThunk<
    IOriginRepo[],
    void,
    { state: IState; rejectWithValue: string }
>("repos/getFavoriteRepos", async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    const response = await fetchWrap(token, queryGetFavorite());
    if (!response.ok) {
        return rejectWithValue("Error getFavoriteRepos!");
    }
    const data = await response.json();
    return data.data.viewer.starredRepositories.edges;
});