import { createSlice } from "@reduxjs/toolkit";
import { cardState } from "../cardState";

export const cardSlice = createSlice({
  name: "cardStates",
  initialState: cardState,
  reducers: {},
});

export const {} = cardSlice.actions;

export default cardSlice.reducer;
