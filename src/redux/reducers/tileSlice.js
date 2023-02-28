import { createSlice } from "@reduxjs/toolkit";
import { tileState } from "../tileState";

export const tileSlice = createSlice({
  name: "tileStates",
  initialState: tileState,
  reducers: {
    shuffleTile: (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      arr.splice(5);
    },
    getTile: (state, payload) => {
      state[payload.payload] = null;
    },
  },
});

export const { shuffleTile, getTile } = tileSlice.actions;

export default tileSlice.reducer;
