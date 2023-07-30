import { DiaryType } from "@/models/personal/Diary";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: DiaryType[] = [
  {
    _id: "64c2b2e5b4b8742705a7dd04",
    user: "64c16d804043c533448db52e",
    title: "really??",
    body: "Hummm",
    created: "2023-07-27T18:09:41.106Z",
  },
];

const diarySlice = createSlice({
  name: "dairy",
  initialState,
  reducers: {
    setDiaries: (state, action: PayloadAction<DiaryType[]>) => {
      action.payload.forEach((payload) => state.push(payload));
      console.log("state=>", state);
      console.log("action=>", action.payload);
    },
    createDiary: (state, action: PayloadAction<DiaryType>) => {
      state.push(action.payload);
    },
    updateDiary: (state, action: PayloadAction<DiaryType>) => {
      const updatedDiary = action.payload;
      const index = state.findIndex((diary) => diary._id === updatedDiary._id);
      state[index] = updatedDiary;
    },
    deleteDiary: (state, action: PayloadAction<DiaryType>) => {
      const deletedDiary = action.payload;
      state.filter((diary) => diary._id === deletedDiary._id);
    },
  },
});

export default diarySlice.reducer;

export const { setDiaries, createDiary, updateDiary, deleteDiary } =
  diarySlice.actions;
