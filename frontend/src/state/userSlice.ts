import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
export interface UserType {
  username: string;
  token: string;
  userID: string;
  isAuthenticated: boolean;
}

const initialState: UserType = {
  username: "",
  token: "",
  userID: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.userID = action.payload.userID;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    clearUser: (state) => {
      state.username = "";
      state.isAuthenticated = false;
      state.userID = "";
      state.token = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
