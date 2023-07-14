import { createSlice } from "@reduxjs/toolkit";

interface IInitialUISlice {
  alertIsShown: boolean;
}

const initialState: IInitialUISlice = {
  alertIsShown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setAlert(state, action) {
      state.alertIsShown = action.payload;
    },
  },
});

export const { setAlert } = uiSlice.actions;

export default uiSlice.reducer;
