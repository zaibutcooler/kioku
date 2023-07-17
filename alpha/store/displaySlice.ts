import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DisplayType {
  isShowed: boolean;
}

const initialState: DisplayType = {
  isShowed: false,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isShowed = !state.isShowed;
    },
  },
});

export const { toggleSidebar } = displaySlice.actions;
export default displaySlice.reducer;
