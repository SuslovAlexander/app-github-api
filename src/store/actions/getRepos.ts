import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOriginRepo } from "../types/TPartialOriginRepo";
import { IState } from "../types/IState";
import { fetchWrap } from "../../utils/fetchWrap";
import { queryGetRepos } from "../../queries/queryGetRepos";

export const getRepos = createAsyncThunk<
    IOriginRepo[],
    string,
    { state: IState; rejectWithValue: string }
>("repos/getRepos", async (searchStr: string, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    const response = await fetchWrap(token, queryGetRepos(searchStr));
    if (!response.ok) {
        return rejectWithValue("Error getRepos!");
    }
    const data = await response.json();
    return data.data.search.edges;
});