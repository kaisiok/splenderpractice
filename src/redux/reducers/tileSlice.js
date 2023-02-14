import { createSlice } from "@reduxjs/toolkit";
import { tileState } from "../tileState";

export const tileSlice = createSlice({
  name: "tileStates",
  initialState: tileState,
  reducers: {},
});

export const {} = tileSlice.actions;

export default tileSlice.reducer;
