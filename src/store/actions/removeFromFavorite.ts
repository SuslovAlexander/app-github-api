import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOriginRepo } from "../types/TPartialOriginRepo";
import { IState } from "../types/IState";
import { fetchWrap } from "../../utils/fetchWrap";
import { mutationRemoveStar } from "../../queries/mutationRemoveStar";

export const removeFromFavorite = createAsyncThunk<
    IOriginRepo[],
    string,
    { state: IState; rejectWithValue: string }
>(
    "repos/removeFromFavorite",
    async (repoId: string, { rejectWithValue, getState }) => {
        const { token } = getState().auth;
        const response = await fetchWrap(token, mutationRemoveStar(repoId));
        if (!response.ok) {
            return rejectWithValue("Error removeFromFavorite!");
        }
        const data = await response.json();
        return data.data.viewer.starredRepositories.edges
    }
);