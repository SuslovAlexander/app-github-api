
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOriginRepo } from "../types/TPartialOriginRepo";
import { IState } from "../types/IState";
import { fetchWrap } from "../../utils/fetchWrap";
import { queryGetPrevRepos } from "../../queries/queryGetPrevRepos.";

export const getPrevRepos = createAsyncThunk<
    IOriginRepo[],
    { searchStr: string, before: string | null | undefined},
    { state: IState; rejectWithValue: string }
>("repos/getPrevRepos", async ({ searchStr, before }, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    const response = await fetchWrap(token, queryGetPrevRepos(searchStr, before));
    if (!response.ok) {
        return rejectWithValue("Error getRepos!");
    }
    const data = await response.json();

    return data.data.search.edges;
});