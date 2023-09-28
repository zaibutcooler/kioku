import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "./diarySlice";
import gadgetReducer from "./gadgetSlice";

export const store = configureStore({
  reducer: {
    diary: diaryReducer,
    gadget: gadgetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
