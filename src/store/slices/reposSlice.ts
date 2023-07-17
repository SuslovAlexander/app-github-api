import { createSlice } from "@reduxjs/toolkit";

import { getReposFromPayload } from "../../utils/getReposFromPayload";
import { getFavoriteRepos } from "../actions/getFavoriteRepos";
import { getRepos } from "../actions/getRepos";
import { IInitialReposSlice } from "../types/IInitialReposSlice";
import { removeFromFavorite } from "../actions/removeFromFavorite";
import { addToFavorite } from "../actions/addToFavorite";
import { getNextRepos } from "../actions/getNextRepos";
import { getPrevRepos } from "../actions/getPrevtRepos.";

const initialState: IInitialReposSlice = {
  found: [],
  favorites: [],
  searchInProcess: false,
  faforiteIsFetching: false,
  cursor: null,
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
      state.cursor = state.found[state.found.length - 1]?.cursor
    });
    bulder.addCase(getNextRepos.pending, (state, { payload }) => {
      state.searchInProcess = true;
    });
    bulder.addCase(getNextRepos.fulfilled, (state, { payload }) => {
      state.searchInProcess = false;
      state.found = getReposFromPayload(payload);
      state.cursor = state.found[state.found.length - 1]?.cursor
    });
    bulder.addCase(getPrevRepos.pending, (state, { payload }) => {
      state.searchInProcess = true;
    });
    bulder.addCase(getPrevRepos.fulfilled, (state, { payload }) => {
      state.searchInProcess = false;
      state.found = getReposFromPayload(payload);
      state.cursor = state.found[state.found.length - 1]?.cursor
    });
    bulder.addCase(addToFavorite.fulfilled, (state, { payload }) => {
      const changeView = state.found.find((item) => item.id === payload);
      if (changeView) {
        changeView.viewerHasStarred = true;
      }
    });
    bulder.addCase(getFavoriteRepos.pending, (state) => {
      state.faforiteIsFetching = true;
    });
    bulder.addCase(getFavoriteRepos.fulfilled, (state, { payload }) => {
      state.faforiteIsFetching = false;
      state.favorites = getReposFromPayload(payload);
    });
    bulder.addCase(removeFromFavorite.fulfilled, (state, { payload }) => {
      state.favorites = state.favorites.filter(item => item.id !== payload);
    });
  },
});

export const { clearFound } = reposSlice.actions;

export default reposSlice.reducer;