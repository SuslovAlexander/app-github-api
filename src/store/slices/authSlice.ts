import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IInitialAuthSlice } from "../types/IInitialAuthSlice";
import { IInitialReposSlice } from "../types/IInitialReposSlice";
import { TUserLogin } from "../types/TUserLogin";

export const getViewer = createAsyncThunk<TUserLogin, void, { state: { auth: IInitialAuthSlice; repos: IInitialReposSlice; }, rejectWithValue: string }>("auth/getViewer", async (_, { getState, rejectWithValue }) => {
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
            login
            avatarUrl
          } 
        }`,
    }),
  });
  if (!response.ok) {
    return rejectWithValue("Auth error!")
  }
  const data = await response.json();
  return data.data.viewer;
});

const initialState: IInitialAuthSlice = {
  token: null,
  isAuth: false,
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = null;
    },
    setIsAuth(state) {
      state.isAuth = true;
    },
    removeIsAuth(state) {
      state.isAuth = false;
    },
    logOut(state) {
      state.isAuth = false;
      state.token = null;
      state.user = null;
    },
    setUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getViewer.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getViewer.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getViewer.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error occured in AUTH";
    });
  },
});

export const {
  setToken,
  removeToken,
  setIsAuth,
  removeIsAuth,
  logOut,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;
