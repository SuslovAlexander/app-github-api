import { createSlice } from "@reduxjs/toolkit";

import { getReposFromPayload } from "../../utils/getReposFromPayload";
import { addToFavorite } from "../actions/addToFavorite";
import { getFavoriteRepos } from "../actions/getFavoriteRepos";
import { getRepos } from "../actions/getRepos";
import { IInitialReposSlice } from "../types/IInitialReposSlice";

const initialState: IInitialReposSlice = {
  found: [],
  favorites: [],
  searchInProcess: false,
  faforiteIsFetching: false,
};

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    clearFound(state) {
      state.found = [];
    },
  },
  extraReducers: (bulder) => {
    bulder.addCase(getRepos.pending, (state) => {
      state.searchInProcess = true;
    });
    bulder.addCase(getRepos.fulfilled, (state, { payload }) => {
      state.searchInProcess = false;
      state.found = getReposFromPayload(payload);
    });
    bulder.addCase(getFavoriteRepos.pending, (state) => {
      state.faforiteIsFetching = true;
    });
    bulder.addCase(getFavoriteRepos.fulfilled, (state, { payload }) => {
      state.faforiteIsFetching = false;
      state.favorites = getReposFromPayload(payload);
    });
    bulder.addCase(addToFavorite.fulfilled, (state, { payload }) => {
      state.favorites = getReposFromPayload(payload);
    });
  },
});

export const { clearFound } = reposSlice.actions;

export default reposSlice.reducer;
