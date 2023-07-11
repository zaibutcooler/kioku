import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  url: "",
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {},
});

export default displaySlice.reducer;
