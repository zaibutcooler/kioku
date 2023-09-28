import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { showedGadget: string } = { showedGadget: "" };

const gadgetSlice = createSlice({
  name: "gadget",
  initialState,
  reducers: {
    setGadget: (state, action: PayloadAction<string>) => {
      state.showedGadget = action.payload;
    },
    clearGadget: (state) => {
      state.showedGadget = "";
    },
  },
});

export const { setGadget, clearGadget } = gadgetSlice.actions;

export default gadgetSlice.reducer;
