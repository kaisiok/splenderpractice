import { createSlice } from "@reduxjs/toolkit";
import { tokenState } from "../tokenState";

export const tokenSlice = createSlice({
  name: "tokenStates",
  initialState: tokenState,
  reducers: {},
});

export const {} = tokenSlice.actions;

export default tokenSlice.reducer;
