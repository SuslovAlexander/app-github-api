import { createAsyncThunk } from "@reduxjs/toolkit";

import { mutationRemoveStar } from "../../queries/mutationRemoveStar";
import { fetchWrap } from "../../utils/fetchWrap";
import { IState } from "../types/IState";

export const removeFromFavorite = createAsyncThunk<
  string,
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
    await response.json();
    return repoId;
  }
);
