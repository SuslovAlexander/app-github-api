import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import reposReducer from "./slices/reposSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    repos: reposReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
