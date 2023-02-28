import { createSlice } from "@reduxjs/toolkit";
import { tokenState } from "../tokenState";

export const tokenSlice = createSlice({
  name: "tokenStates",
  initialState: tokenState,
  reducers: {
    getToken: (state, payload) => {
      Object.assign(state, payload.payload);
    },
    cancelGetToken: (state, payload) => {
      for (let key in state) {
        if (payload.payload[key]) {
          state[key] += payload.payload[key];
        }
      }
    },
    getGoldToken: (state) => {
      state.goldToken -= 1;
    },
  },
});

export const { getToken, cancelGetToken, getGoldToken } = tokenSlice.actions;

export default tokenSlice.reducer;
