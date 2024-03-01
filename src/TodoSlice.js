import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      console.log("nsasnaj", action, state);
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = todoSlice.actions;

export default todoSlice.reducer;