import { createSlice } from "@reduxjs/toolkit";

export const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    type: "default",
  },
  reducers: {
    setCursorDefault: (state) => {
      state.type = "default";
    },
    hideCursor: (state) => {
      state.type = "hidden";
    },
  },
});

export const { setCursorDefault, hideCursor } = cursorSlice.actions;

export default cursorSlice.reducer;
