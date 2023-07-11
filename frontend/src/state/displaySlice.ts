import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  showNavbar: true,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    closeNavbar: (state) => {
      state.showNavbar = false;
    },
    openNavbar: (state) => {
      state.showNavbar = true;
    },
  },
});

export const { closeNavbar, openNavbar } = displaySlice.actions;

export default displaySlice.reducer;
