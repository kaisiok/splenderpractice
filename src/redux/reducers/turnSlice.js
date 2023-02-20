import { createSlice } from "@reduxjs/toolkit";

const turnState = {
  activatedPlayer: 1,
  canPlay: true,
  action: "",
  token: {
    emeraldToken: 0,
    diamondToken: 0,
    sapphireToken: 0,
    onyxToken: 0,
    rubyToken: 0,
  },
  buyCard: {
    id: "",
    cost: {
      emeraldToken: 0,
      diamondToken: 0,
      sapphireToken: 0,
      onyxToken: 0,
      rubyToken: 0,
    },
  },
  bringCard: {
    id: "",
    goldToken: 0,
  },
};

export const turnSlice = createSlice({
  name: "turn",
  initialState: turnState,
  reducers: {
    nextTurn: (state) => {
      if (state.activatedPlayer < 4) {
        state.activatedPlayer += 1;
      } else {
        state.activatedPlayer = 1;
      }
    },
  },
});

export const { nextTurn } = turnSlice.actions;

export default turnSlice.reducer;
