import { createAsyncThunk } from "@reduxjs/toolkit";

import { mutationAddStar } from "../../queries/mutationAddStar";
import { fetchWrap } from "../../utils/fetchWrap";
import { IState } from "../types/IState";

export const addToFavorite = createAsyncThunk<
  string,
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
    await response.json();
    return repoId;
  }
);
