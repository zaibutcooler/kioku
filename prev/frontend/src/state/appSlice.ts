import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  accoms: [],
  todos: [],
  diaries: [],
  goals: [],
  notes: [],
  summaries: [],
};

const appSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    setAccoms: (state, action: PayloadAction<any>) => {
      state.accoms = action.payload;
    },
    setTodos: (state, action: PayloadAction<any>) => {
      state.todos = action.payload;
    },
    createTodos: (state, action: PayloadAction<any>) => {
      state.todos = [action.payload, ...state.todos];
    },

    updateTodos: (state, action: PayloadAction<any>) => {
      const updatedTodo = action.payload;
      const todoIndex = state.todos.findIndex(
        (todo: any) => todo.id === updatedTodo.id
      );
      if (todoIndex !== -1) {
        state.todos[todoIndex] = updatedTodo;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      const todoIndex = state.todos.findIndex(
        (todo: any) => todo.id === todoId
      );
      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1);
      }
    },
    setDiaries: (state, action: PayloadAction<any>) => {
      state.diaries = action.payload;
    },
    setNotes: (state, action: PayloadAction<any>) => {
      state.notes = action.payload;
    },
    setSummaries: (state, action: PayloadAction<any>) => {
      state.summaries = action.payload;
    },
  },
});

export default appSlice.reducer;
