import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IInitialAuthSlice } from "../types/IInitialAuthSlice";
import { IInitialReposSlice } from "../types/IInitialReposSlice";
import { TPartialRepo } from "../types/IRepo";
import { IState } from "../types/IState";

export const getRepos = createAsyncThunk<TPartialRepo[], string, { state: { auth: IInitialAuthSlice; repos: IInitialReposSlice; }, rejectWithValue: string }>(
  "auth/getRepos",
  async (searchStr: string, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query: `query {
          search(query: "${searchStr}", type: REPOSITORY, first: 10) {
            edges {
              node {
                ... on Repository {
                  name
                  id
                  primaryLanguage {
                    name
                  }
                  viewerHasStarred
                  url
                }
              }
            }
          }
        }`,
      }),
    });
    if (!response.ok) {
      return rejectWithValue("Error getRepos!")
    }
    const data = await response.json();
    return data.data.search.edges;
  }
);

export const getFavoriteRepos = createAsyncThunk<TPartialRepo[], void, { state: IState, rejectWithValue: string }>(
  "auth/getFavoriteRepos",
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query: `{
          viewer {
            starredRepositories(first: 10) {
              edges {
                node {
                  name
                  id
                  primaryLanguage {
                    name
                  }
                  viewerHasStarred
                  url
                }
              }
            }
          }
        }`,
      }),
    });
    if (!response.ok) {
      return rejectWithValue("Error getFavoriteRepos!")
    }
    const data = await response.json();
    return data.data.viewer.starredRepositories.edges;
  }
);

export const addToFavorite = createAsyncThunk<TPartialRepo[], string, { state: IState, rejectWithValue: string }>(
  "auth/addToFavorite",
  async (repoId: string, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query: `mutation {
          addStar(input:{starrableId: "${repoId}"}) {  
        starrable {
              stargazers {
                totalCount
              } 
            }
          }
        }`,
      }),
    });
    if (!response.ok) {
      return rejectWithValue("Error addToFavorite!");
    }
    const data = await response.json();
    return data.data.viewer.starredRepositories.edges;
  }
);

export const removeFromFavorite = createAsyncThunk<TPartialRepo[], string, { state: IState, rejectWithValue: string }>(
  "auth/removeFromFavorite",
  async (repoId: string, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query: `mutation {
          removeStar(input:{starrableId:"${repoId}"}) {
            starrable {
              id
            }
          }
        }`,
      }),
    });
    if (!response.ok) {
      return rejectWithValue("Error removeFromFavorite!");
    }
    const data = await response.json();
    return data.data.viewer.starredRepositories.edges;
  }
);


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
  extraReducers: (builder) => {
    builder.addCase(getRepos.pending, (state) => {
      state.searchInProcess = true;
    });
    builder.addCase(getRepos.fulfilled, (state, { payload }) => {
      state.searchInProcess = false;
      state.found = payload.map((item: any) => ({
        id: item?.node?.id,
        url: item?.node?.url,
        name: item?.node?.name,
        primaryLanguage: item?.node?.primaryLanguage?.name,
        viewerHasStarred: item?.node?.viewerHasStarred,
      }));
    });

    builder.addCase(getFavoriteRepos.pending, (state) => {
      state.faforiteIsFetching = true;
    });
    builder.addCase(getFavoriteRepos.fulfilled, (state, { payload }) => {
      state.faforiteIsFetching = false;
      state.favorites = payload.map((item: any) => ({
        id: item?.node?.id,
        url: item?.node?.url,
        name: item?.node?.name,
        primaryLanguage: item?.node?.primaryLanguage?.name,
        viewerHasStarred: item?.node?.viewerHasStarred,
      }));
    });

    builder.addCase(addToFavorite.fulfilled, (state, { payload }) => {
      state.favorites = payload.map((item: any) => ({
        id: item?.node?.id,
        url: item?.node?.url,
        name: item?.node?.name,
        primaryLanguage: item?.node?.primaryLanguage?.name,
        viewerHasStarred: item?.node?.viewerHasStarred,
      }));
    });
  },
});

export const { clearFound } = reposSlice.actions;

export default reposSlice.reducer;