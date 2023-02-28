import { createSlice } from "@reduxjs/toolkit";
import { userStates } from "../userState";

export const userSlice = createSlice({
  name: "userStates",
  initialState: userStates,
  reducers: {
    getTokenUser: (state, payload) => {
      for (let key in state[payload.payload.id - 1].tokens) {
        if (payload.payload.tokens[key]) {
          state[payload.payload.id - 1].tokens[key] +=
            payload.payload.tokens[key];
        }
      }
    },
    buyCardUser: (state, payload) => {
      const userIdx = Number(payload.payload.user.id.slice(-1)) - 1;
      const type = payload.payload.selectedCard.type + "Cards";

      state[userIdx].cards[type].push(payload.payload.selectedCard);
      state[userIdx].score += payload.payload.selectedCard.score;
    },
    bringCardUser: (state, payload) => {
      if (payload.payload.remainGoldToken > 0) {
        state[payload.payload.user].tokens.goldToken += 1;
      }
      state[payload.payload.user].hands.push(payload.payload.selectedCard);
    },
    getTileUser: (state, payload) => {
      const activatedPlayer = payload.payload.activatedPlayer;
      state[activatedPlayer - 1].score += 3;
      state[activatedPlayer - 1].tiles.push(payload.payload.tile);
    },
  },
});

export const { getTokenUser, buyCardUser, bringCardUser, getTileUser } =
  userSlice.actions;

export default userSlice.reducer;
