import { configureStore } from "@reduxjs/toolkit";
import cursorSliceReducer from "../slices/cursorSlice";

const store = configureStore({
  reducer: {
    cursor: cursorSliceReducer,
  },
});

export default store;
