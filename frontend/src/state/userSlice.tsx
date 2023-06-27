import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthType {
  username: string;
  token: string;
}

const initialState: AuthType = {
  username: "",
  token: "",
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthType>) => {
      state = action.payload;
    },
    clearUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
