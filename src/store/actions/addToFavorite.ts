import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOriginRepo } from "../types/TPartialOriginRepo";
import { IState } from "../types/IState";
import { fetchWrap } from "../../utils/fetchWrap";
import { mutationAddStar } from "../../queries/mutationAddStar";

export const addToFavorite = createAsyncThunk<
    IOriginRepo[],
    string,
    { state: IState; rejectWithValue: string }
>(
    "repos/addToFavorite",
    async (repoId: string, { getState, rejectWithValue }) => {
        const { token } = getState().auth;
        const response = await fetchWrap(token, mutationAddStar(repoId));
        if (!response.ok) {
            return rejectWithValue("Error addToFavorite!");
        }
        const data = await response.json();
        console.log(data)
        return data.data.viewer.starredRepositories.edges
    }
);