import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Slice.js";
import todoSReducer from "./TodoSlice.js";

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
    todoReducer: todoSReducer,
  },
});

export default store;
