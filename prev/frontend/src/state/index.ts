import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import appReducer from "./appSlice";
import displayReducer from "./displaySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    display: displayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
