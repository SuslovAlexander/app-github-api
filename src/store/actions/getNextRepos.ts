
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOriginRepo } from "../types/TPartialOriginRepo";
import { IState } from "../types/IState";
import { fetchWrap } from "../../utils/fetchWrap";
import { queryGetNextRepos } from "../../queries/queryGetNextRepos";

export const getNextRepos = createAsyncThunk<
    IOriginRepo[],
    { searchStr: string, after: string | null | undefined },
    { state: IState; rejectWithValue: string }
>("repos/getNextRepos", async ({ searchStr, after }, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    const response = await fetchWrap(token, queryGetNextRepos(searchStr, after));
    if (!response.ok) {
        return rejectWithValue("Error getRepos!");
    }
    const data = await response.json();

    return data.data.search.edges;
});