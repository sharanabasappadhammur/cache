import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment(state, action) {
    //   console.log("nsasnaj", action, state);
    //   state.count += 1;
    // },
    // decrement(state) {
    //   state.count -= 1;
    // },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
